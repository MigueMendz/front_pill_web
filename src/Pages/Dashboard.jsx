import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Components/Home/Header";
import Slidebar from "../Components/Home/Slidebar";
import InfoCards from "../Components/Home/InfoCards";
import Statistics from "../Components/Home/Statistics";
import LatestTransactions from "../Components/Home/LatestTransactions";
import MedicationCalendar from "../Components/Home/MedicationCalendar";

function Dashboard() {
  const [alertActive, setAlertActive] = useState(false);
  const alertSound = useRef(null); // Usamos useRef para mantener la instancia del sonido

  useEffect(() => {
    // Crear el sonido solo una vez al montar el componente
    alertSound.current = new Audio("/sounds/alert.mp4");
    alertSound.current.loop = true;
  }, []);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const response = await axios.get("http://54.163.130.107:3000/alerts"); // Cambia la URL por la adecuada
        const data = response.data;
        console.log("Datos de la API ALERTS:", data);

        if (data.event === "boton alerta precionado" && !alertActive && alertSound.current) {
          setAlertActive(true);
          
          // Asegúrate de que el sonido esté cargado y listo
          alertSound.current.play();

          Swal.fire({
            title: "¡Ayuda urgente requerida!",
            text: "El paciente necesita ayuda inmediata.",
            icon: "warning",
            confirmButtonText: "Entendido",
            background: "#fff",
            backdrop: "rgba(0, 0, 0, 0.4)",
          }).then(() => {
            // Detener el sonido al confirmar la alerta
            if (alertSound.current) {
              alertSound.current.pause();
              alertSound.current.currentTime = 0; // Reiniciar el sonido
            }
            setAlertActive(false); // Reiniciar estado de alerta
          });
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    // Ejecutar la función fetchData cada 5 segundos para obtener datos de la API
    intervalId = setInterval(fetchData, 5000); // Intervalo de 5 segundos

    // Limpiar el intervalo y detener el sonido al desmontar el componente
    return () => {
      clearInterval(intervalId);
      if (alertSound.current) {
        alertSound.current.pause();
      }
    };
  }, [alertActive]); // Dependencias: alerta activa

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Slidebar />

      <div className="flex-1 p-6">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <InfoCards />
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <Statistics />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow lg:col-span-1">
            <MedicationCalendar />
          </div>

          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow">
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
