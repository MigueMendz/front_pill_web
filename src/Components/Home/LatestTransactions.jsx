import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MedicationSchedule() {
  // Estado para almacenar los datos del backend
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const patientId = localStorage.getItem('id_paciente_home');

  useEffect(() => {
    const fetchMedicationSchedule = async () => {
      try {
        // Obtener el token desde el localStorage
        const token = localStorage.getItem('token');

        // Configurar los encabezados para incluir el token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Realizar la solicitud GET
        const response = await axios.get(
          `https://back-pillcare.zapto.org/medicines/patient/${patientId}`,
          config
        );

        // Establecer los datos en el estado
        setSchedule(response.data);
        console.log('Horario de medicación:', response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el horario de medicación:', error);
        setError('No se pudo cargar el horario de medicación.');
        setLoading(false);
      }
    };

    fetchMedicationSchedule();
  }, [patientId]);

  const statusColors = {
    Tomado: 'text-green-500',
    Pendiente: 'text-yellow-500',
  };

  if (loading) {
    return <p>Cargando horario de medicación...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700">Horario de Medicación</h3>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left text-gray-600">Nombre</th>
            <th className="text-left text-gray-600">Horario</th>
            <th className="text-left text-gray-600">Dosis</th>
            <th className="text-left text-gray-600">Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{item.nombre_medicamento}</td>
              <td>{item.horario_medicamento}</td>
              <td>{item.dosis}</td>
              <td>{item.frecuencias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicationSchedule;
