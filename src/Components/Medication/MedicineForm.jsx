import React, { useState } from "react";
import axios from "axios";

function MedicineForm({ isEditing, onScanRfid }) {
  const id_paciente = localStorage.getItem("id_paciente_home");
  const [form, setForm] = useState({
    id_paciente: id_paciente,
    nombre_medicamento: "",
    horario_medicamento: "",
    fecha_inicio: "",
    fecha_final: "",
    dosis: "",
    frecuencias: "",
    notas_adicionales: "",
    id_medicamento_rfid: "", // Nuevo campo para el RFID
  });

  const token = localStorage.getItem("token");

  // Configura los encabezados con el token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleScanRfid = async () => {
    try {
      const response = await axios.get("https://back-pillcare.zapto.org/medicines/pending-rfids", config);
      
      // Trabaja directamente con el objeto JSON
      console.log("Respuesta recibida del backend:", response.data);
  
      // Extraer el valor de 'id_medicamento_rfid'
      const id_medicamento_rfid = response.data.id_medicamento_rfid;
      
      if (id_medicamento_rfid) {
        setForm({ ...form, id_medicamento_rfid });
        alert(`RFID escaneado: ${id_medicamento_rfid}`);
      } else {
        alert("No se pudo obtener el RFID. Asegúrate de que haya un RFID pendiente.");
      }
    } catch (error) {
      console.error("Error al escanear el RFID:", error);
      alert("Hubo un error al escanear el RFID. Revisa la consola para más detalles.");
    }
  };
  
  
  
  const handleSave = async () => {
    try {
      const response = await axios.post("https://back-pillcare.zapto.org/medicines/add", form, config);
      alert("Medicamento agregado con éxito");
      console.log(response.data);
    } catch (error) {
      console.error("Error al agregar el medicamento:", error);
      alert("Hubo un error al guardar el medicamento. Revisa la consola para más detalles.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? "Editar Medicamento" : "Agregar Medicamento"}
      </h3>
      <input
        type="text"
        name="nombre_medicamento"
        value={form.nombre_medicamento}
        onChange={handleChange}
        placeholder="Nombre del Medicamento"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="time"
        name="horario_medicamento"
        value={form.horario_medicamento}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="date"
        name="fecha_inicio"
        value={form.fecha_inicio}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="date"
        name="fecha_final"
        value={form.fecha_final}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="text"
        name="dosis"
        value={form.dosis}
        onChange={handleChange}
        placeholder="Dosis"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="text"
        name="frecuencias"
        value={form.frecuencias}
        onChange={handleChange}
        placeholder="Frecuencia"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <textarea
        name="notas_adicionales"
        value={form.notas_adicionales}
        onChange={handleChange}
        placeholder="Notas Adicionales"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="id_medicamento_rfid"
          value={form.id_medicamento_rfid}
          onChange={handleChange}
          placeholder="Código RFID"
          className="flex-grow px-4 py-2 rounded-md border"
        />
        <button
          onClick={handleScanRfid}
          className="ml-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
        >
          Escanear RFID
        </button>
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 w-full"
      >
        {isEditing ? "Guardar Cambios" : "Agregar Medicamento"}
      </button>
    </div>
  );
}

export default MedicineForm;
