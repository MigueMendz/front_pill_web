import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderPacient() {
  const navigate = useNavigate();

  const handleBackTohome = () => {
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-between w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold text-teal-600">Perfil del Paciente</h2>
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-lg bg-teal-600 text-white"
         onClick={handleBackTohome}>Regresar</button>
      </div>
    </div>
  );
}

export default HeaderPacient;
