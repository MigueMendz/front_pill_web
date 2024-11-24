import React from 'react';

function IndicatorCard({ title, value, status }) {
  const statusColors = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
    default: 'text-gray-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <h4 className="text-lg font-medium text-gray-700">{title}</h4>
      <p className={`text-2xl font-bold ${statusColors[status]}`}>{value}</p>
    </div>
  );
}

export default IndicatorCard;
