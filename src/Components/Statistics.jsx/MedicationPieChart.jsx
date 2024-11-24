import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Medicamento A', 'Medicamento B', 'Medicamento C'],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ['#00747C', '#00BBC9', 'red'],
      borderWidth: 1,
    },
  ],
};

function MedicationPieChart() {
  return (
    <div style={{ width: '400px', height: '400px' }}> 
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default MedicationPieChart;
