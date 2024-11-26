import React, { useEffect, useState } from "react";
import axios from "axios";

function InfoCards() {
  const [userInfo, setUserInfo] = useState(null); 
  const idUsuario = localStorage.getItem("login_id");
  console.log("idUsuario en infoCards",idUsuario)
  const token = localStorage.getItem("token");

      // Configura los encabezados con el token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://back-pillcare.zapto.org/patients/get/user/${idUsuario}`, config);
        console.log("response",response)
        localStorage.setItem("id_paciente_home", response.data.id_paciente);
        setUserInfo(response.data); 
      } catch (error) {
        console.error("Error al obtener los datos del paciente:", error);
      }
    };

    if (idUsuario) {
      fetchUserData();
    } else {
      console.error("No se encontró un ID de usuario en localStorage.");
    }
  }, [idUsuario]);

  const info = [
    { title: "Paciente", illness: userInfo?.condicion || "No especificada", image: "/fotoo.png" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6w-24" >
      {info.map((item, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-lg shadow-lg ${item.title === "Paciente" ? "col-span-2" : ""}`}
        >
          <p className="text-gray-600">{item.title}</p>
          {item.title === "Paciente" && userInfo && (
            <>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={`Imagen de ${userInfo.nombre_completo}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-gray-700">
                    Nombre: {userInfo.nombre_completo}
                  </p>
                  <p className="text-md text-gray-600">
                    Enfermedad: {userInfo.condicion}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p><strong>Edad:</strong> {userInfo.edad}</p>
                <p><strong>Teléfono:</strong> {userInfo.telefono}</p>
                <p><strong>Grupo Sanguíneo:</strong> {userInfo.grupo_sanguineo}</p>
                <p><strong>Diagnóstico Reciente:</strong> {userInfo.diagnostico_reciente}</p>
              </div>
            </>
          )}
          {item.title === "Paciente" && !userInfo && <p>Cargando datos del paciente...</p>}
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
