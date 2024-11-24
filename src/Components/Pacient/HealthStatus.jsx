import React from 'react';

function HealthStatus() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-600 mb-4">Estado de Salud</h3>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <img src="/path/to/status1.png" alt="Status 1" className="w-12 h-12 mb-2" />
          <p className="text-sm">Estable</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/path/to/status2.png" alt="Status 2" className="w-12 h-12 mb-2" />
          <p className="text-sm">Monitor</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/path/to/status3.png" alt="Status 3" className="w-12 h-12 mb-2" />
          <p className="text-sm">Atención</p>
        </div>
      </div>
    </div>
  );
}

export default HealthStatus;
