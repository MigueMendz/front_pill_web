import React from "react";

function LogoutModal({ isOpen, onClose, onLogout }) {
  if (!isOpen) return null;

  const deleteSession = () => {
    localStorage.clear();
    onLogout();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">
          ¿Estás seguro de que deseas cerrar sesión?
        </h2>
        <p className="text-gray-600 mb-6">
          Tu sesión actual será cerrada y regresarás al inicio.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={deleteSession}
            className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
          >
            Sí, cerrar sesión
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
