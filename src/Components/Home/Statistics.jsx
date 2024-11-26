import React, { useState, useEffect } from 'react';

const HealthTrendChart = () => {
  const [doorOpenCount, setDoorOpenCount] = useState(0);
  const [doorClosedCount, setDoorClosedCount] = useState(0);
  const [pirMovementCount, setPirMovementCount] = useState(0);
  const [pirNoMovementCount, setPirNoMovementCount] = useState(0);


  const token = localStorage.getItem("token");

  // Configura los encabezados con el token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://back-pillcare.zapto.org/sensor/messages', config);
        const data = await response.json();

        // Filtrar y contar eventos
        setDoorOpenCount(
          data.filter((event) => event.sensor === 'puerta' && event.status === 'abierta').length
        );
        setDoorClosedCount(
          data.filter((event) => event.sensor === 'puerta' && event.status === 'cerrada').length
        );
        setPirMovementCount(
          data.filter((event) => event.sensor === 'PIR' && event.status === 'movimiento detectado').length
        );
        setPirNoMovementCount(
          data.filter((event) => event.sensor === 'PIR' && event.status === 'no hay movimiento').length
        );
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <div style={cardStyle}>
          <h4>Puertas abiertas</h4>
          <p style={countStyle}>{doorOpenCount}</p>
        </div>
        <div style={cardStyle}>
          <h4>Sensores PIR</h4>
          <p style={countStyle}>{pirMovementCount}</p>
        </div>
      </div>
      <div style={columnStyle}>
        <div style={cardStyle}>
          <h4>Puertas cerradas</h4>
          <p style={countStyle}>{doorClosedCount}</p>
        </div>
        <div style={cardStyle}>
          <h4>No hay movimiento (PIR)</h4>
          <p style={countStyle}>{pirNoMovementCount}</p>
        </div>
      </div>
    </div>
  );
};

// Estilos para el contenedor y las columnas
const containerStyle = {
  display: 'flex',
  marginTop: '20px',
  flexWrap: 'wrap', // Asegura que las columnas se ajusten en pantallas más pequeñas
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column', // Ordena los elementos verticalmente dentro de cada columna
  width: '45%', // Toma un 45% del ancho disponible, dejando espacio entre las columnas
  margin: '10px',
};

const cardStyle = {
  textAlign: 'center',
  width: '40vh',
  padding: '20px',
  backgroundColor: '#E3F2FD',
  borderRadius: '10px',
  marginBottom: '10px', // Agrega espacio entre las tarjetas
};

const countStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
};

export default HealthTrendChart;
