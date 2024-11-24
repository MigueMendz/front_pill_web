import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileCard({ progress }) {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [userInfo, setUserInfo] = useState(null); // Estado para almacenar datos del paciente
  const idUsuario = localStorage.getItem("login_id");
  const token = localStorage.getItem("token");

  // Configura los encabezados con el token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  console.log("ID de usuario desde localStorage:", idUsuario);

  useEffect(() => {
    // Función para obtener los datos del paciente
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8083/patients/get/user/${idUsuario}`, config);
        console.log("Datos recibidos del backend:", response.data);
        if (response.data) {
          localStorage.setItem("id_paciente_home", response.data.id_paciente);
          setUserInfo(response.data); // Actualizar estado con los datos del paciente
        } else {
          console.error("Datos del paciente no encontrados.");
        }
      } catch (error) {
        console.error("Error al obtener los datos del paciente:", error.response || error.message);
      }
    };

    if (idUsuario) {
      fetchUserData();
    } else {
      console.error("No se encontró un ID de usuario en localStorage.");
    }
  }, [idUsuario]);

  useEffect(() => {
    if (progress >= 0 && progress <= 100) {
      setProgressBarWidth(progress);
    }
  }, [progress]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full flex space-x-8">
      <div className="flex-shrink-0">
        <img alt="Perfil del paciente" className="w-32 h-32 rounded-full shadow-md" />
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-semibold">
          {userInfo?.nombre_completo || "Cargando..."}
        </h3>
        <p className="text-gray-500">
          En tratamiento para: <strong>{userInfo?.enfermedades_pers || "N/A"}</strong>
        </p>

        <div className="mt-4">
          <p className="text-sm text-gray-500">Progreso del tratamiento</p>
          <div className="bg-gray-200 rounded-full h-3 mt-1 relative overflow-hidden">
            <div
              className="bg-teal-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressBarWidth}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-400">{progressBarWidth}% completado</p>
        </div>

        <div className="flex space-x-8 mt-6">
          <div className="text-center">
            <p className="text-2xl font-semibold">27</p>
            <p className="text-gray-500 text-sm">Dosis Tomadas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">5</p>
            <p className="text-gray-500 text-sm">Días Restantes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">90%</p>
            <p className="text-gray-500 text-sm">Adherencia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
