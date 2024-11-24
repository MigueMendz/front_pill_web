import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RealTimeMonitoring() {
  const [medications, setMedications] = useState([]);
  const [alert, setAlert] = useState("");
  const patientId = localStorage.getItem("id_paciente_home");

  const token = localStorage.getItem("token");

  // Configura los encabezados con el token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8083/medicines/patient/${patientId}`, config
        );

        const sortedMedicines = response.data.sort((a, b) => {
          return (
            new Date(`1970-01-01T${a.horario_medicamento}Z`) -
            new Date(`1970-01-01T${b.horario_medicamento}Z`)
          );
        });
        setMedications(sortedMedicines);
      } catch (error) {
        console.error("Error al cargar los medicamentos:", error);
        setAlert(
          "No se pudieron cargar los medicamentos. Revisa la consola para más detalles."
        );
      }
    };

    fetchMedicines();
  }, [patientId]);

  const validateDose = (medicineId) => {
    setMedications((prevMedicines) =>
      prevMedicines.map((medicine) =>
        medicine.id_medicamento === medicineId
          ? { ...medicine, estado: "Cumplido" }
          : medicine
      )
    );
  };

  const currentDate = new Date();

  const navigate = useNavigate();

  const handleBackTohome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
       <div className="flex items-center justify-between w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold text-teal-600">Monitoreo</h2>
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-lg bg-teal-600 text-white"
         onClick={handleBackTohome}>Regresar</button>
      </div>
    </div>

      {alert && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 w-full max-w-2xl">
          <strong className="font-bold">¡Alerta!</strong>
          <span className="block sm:inline ml-2">{alert}</span>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Estado de la Medicación
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {medications.length > 0 ? (
            medications.map((medicine, index) => {
              const doseTime = new Date(
                `${currentDate.toISOString().split("T")[0]}T${
                  medicine.horario_medicamento
                }:00Z`
              );
              const isDelayed =
                currentDate > doseTime && medicine.estado !== "Cumplido";

              return (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow-md"
                >
                  <p className="text-lg font-medium text-gray-600">
                    Medicamento: {medicine.nombre_medicamento}
                  </p>
                  <p className="text-lg font-medium text-gray-600">
                    Dosis Programada
                  </p>
                  <p className="text-2xl font-semibold text-teal-600">
                    {medicine.horario_medicamento}
                  </p>
                  <span
                    className={`text-sm font-semibold px-4 py-1 rounded-full mt-2 ${
                      isDelayed
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isDelayed ? "Retrasado" : "A tiempo"}
                  </span>
                  <button
                    onClick={() => validateDose(medicine.id_medicamento)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Validar Dosis
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center py-4">No hay dosis programadas.</div>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            Historial de Dosis Recientes
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    Medicamento
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    Fecha
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    Hora
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {medications.length > 0 ? (
                  medications.map((medicine, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {medicine.nombre_medicamento}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {medicine.fecha_inicio.split("T")[0]}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {medicine.horario_medicamento}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold ${
                            medicine.estado === "Retrasado"
                              ? "text-red-900"
                              : "text-teal-900"
                          } leading-tight`}
                        >
                          <span
                            aria-hidden
                            className={`absolute inset-0 ${
                              medicine.estado === "Retrasado"
                                ? "bg-red-200 opacity-50"
                                : "bg-teal-200 opacity-50"
                            } rounded-full`}
                          ></span>
                          <span className="relative">
                            {medicine.estado || "Pendiente"}
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No hay medicamentos programados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeMonitoring;
