import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MedicationCalendar() {
  const [value, setValue] = useState(new Date());
  const medicationDays = [new Date(2024, 10, 20), new Date(2024, 10, 22)]; 

  const tileContent = ({ date, view }) => {
    if (view === 'month' && medicationDays.some((day) => day.toDateString() === date.toDateString())) {
      return <span className="bg-teal-600 text-white rounded-full w-2 h-2 block mx-auto"></span>;
    }
    return null;
  };

  return (
    <div className=" bg-white rounded-lg shadow w-64">
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
