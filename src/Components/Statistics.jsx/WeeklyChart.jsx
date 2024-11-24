import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeeklyChart() {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Cumplimiento de Medicación (%)',
        data: [90, 85, 100, 95, 80, 70, 100],
        borderColor: '#42858C',
        backgroundColor: 'rgba(66, 133, 140, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6"
      style={{ width: '400px', height: '300px' }} 
    >
      <h3 className="text-xl font-medium text-teal-600 mb-4">Cumplimiento Semanal</h3>
      <div style={{ height: '100%', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default WeeklyChart;
