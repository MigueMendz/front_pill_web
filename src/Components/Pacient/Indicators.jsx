import React from 'react';

function Indicators() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-600 mb-4">Indicadores</h3>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <img src="/path/to/indicator1.png" alt="Indicator 1" className="w-12 h-12 mb-2" />
          <p className="text-sm">Cumplimiento</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/path/to/indicator2.png" alt="Indicator 2" className="w-12 h-12 mb-2" />
          <p className="text-sm">Estabilidad</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/path/to/indicator3.png" alt="Indicator 3" className="w-12 h-12 mb-2" />
          <p className="text-sm">Avance</p>
        </div>
      </div>
    </div>
  );
}

export default Indicators;
