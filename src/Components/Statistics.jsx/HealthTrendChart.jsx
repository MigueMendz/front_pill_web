import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HealthTrendChart = () => {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Nivel de Salud',
        data: [70, 75, 80, 78, 85, 90, 95],
        backgroundColor: '#00747C',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 12 } },
      },
      y: {
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '200px' }}> 
      <Bar data={data} options={options} />
    </div>
  );
};

export default HealthTrendChart;
