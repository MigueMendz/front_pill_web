import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

function MedicationCalendar() {
  const [value, setValue] = useState(new Date());
  const [medicationDays, setMedicationDays] = useState([]);
  const patientId = localStorage.getItem('id_paciente_home');

  const token = localStorage.getItem("token");

  // Configura los encabezados con el token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  useEffect(() => {
    // Función para obtener los días de medicación
    const fetchMedicationDays = async () => {
      try {
        const response = await axios.get(`https://back-pillcare.zapto.org/medicines/patient/${patientId}`, config);
        const data = response.data;

        // Generar el rango de días entre fecha_inicio y fecha_final
        const allDays = data.flatMap((medication) => {
          const startDate = new Date(medication.fecha_inicio);
          const endDate = new Date(medication.fecha_final);
          const days = [];

          for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            days.push(new Date(d));
          }
          return days;
        });

        setMedicationDays(allDays);
      } catch (error) {
        console.error('Error fetching medication days:', error);
      }
    };

    fetchMedicationDays();
  }, [patientId]);

  const tileContent = ({ date, view }) => {
    if (
      view === 'month' &&
      medicationDays.some((day) => day.toDateString() === date.toDateString())
    ) {
      return <span className="bg-teal-600 text-white rounded-full w-2 h-2 block mx-auto"></span>;
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow w-64 p-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Calendario de Medicación</h3>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
      />
    </div>
  );
}

export default MedicationCalendar;
