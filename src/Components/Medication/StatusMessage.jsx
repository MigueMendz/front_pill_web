import React from "react";

function StatusMessage({ message }) {
  if (!message) return null;

  return (
    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-6">
      <p>{message}</p>
    </div>
  );
}

export default StatusMessage;
