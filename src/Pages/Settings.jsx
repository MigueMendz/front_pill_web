import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserSettings() {
  const login_nombre = localStorage.getItem("login_nombre");
  const login_email = localStorage.getItem("login_email");
  const login_id = localStorage.getItem("login_id");

  const [formData, setFormData] = useState({
    fullName: login_nombre,
    email: login_email,
    password: "",
    newPassword: "",
    notifications: true,
    theme: "light",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const token = localStorage.getItem("token");

      // Configura los encabezados con el token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await axios.put(
        `http://localhost:8083/auth/update/${login_id}`, formData, config,
        {
          nombre: formData.fullName,
          direccion_Email: formData.email,
          contraseña: formData.password,
        }
      );

      setSuccessMessage("Configuraciones actualizadas con éxito");
      console.log("Respuesta del servidor:", response.data);
    } catch (err) {
      console.error("Error al actualizar los datos:", err);
      setError("Hubo un error al actualizar tus datos. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const handleBackTohome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
       <div className="flex items-center justify-between w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold text-teal-600">Configuración</h2>
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-lg bg-teal-600 text-white"
         onClick={handleBackTohome}>Regresar</button>
      </div>
    </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full space-y-6"
      >
        {/* Nombre completo */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Nombre Completo</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Contraseña actual */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Contraseña Actual</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Nueva contraseña */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Nueva Contraseña</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Notificaciones */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleInputChange}
            className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label className="text-gray-700">Recibir notificaciones por correo electrónico</label>
        </div>

        {/* Tema */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Tema</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </div>

        {/* Mensajes de error o éxito */}
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {/* Botón de guardar */}
        <button
          type="submit"
          className={`w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar Cambios"}
        </button>
      </form>
    </div>
  );
}

export default UserSettings;
