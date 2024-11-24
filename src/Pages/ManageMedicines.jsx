import React, { useState } from "react";
import MedicinesTable from "../Components/Medication/MedicinesTable";
import MedicineForm from "../Components/Medication/MedicineForm";
import StatusMessage from "../Components/Medication/StatusMessage";
import { useNavigate } from "react-router-dom";

function ManageMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    rfidCode: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSaveMedicine = () => {
    if (isEditing) {

      const updatedMedicines = medicines.map((medicine) =>
        medicine.id === form.id ? { ...form } : medicine
      );
      setMedicines(updatedMedicines);
      setStatusMessage("¡Medicamento actualizado exitosamente!");
    } else {
   
      const newMedicine = {
        ...form,
        id: Date.now(), 
      };
      setMedicines([...medicines, newMedicine]);
      setStatusMessage("¡Medicamento agregado exitosamente!");
    }
    resetForm();
  };

  const handleDeleteMedicine = (id) => {
    const filteredMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(filteredMedicines);
    setStatusMessage("¡Medicamento eliminado exitosamente!");
  };

  const handleEditMedicine = (medicine) => {
    setForm(medicine);
    setIsEditing(true);
  };

  const handleScanRfid = () => {
    const simulatedRfid = "12345RFID";
    setForm({ ...form, rfidCode: simulatedRfid });
    setStatusMessage("Código RFID escaneado correctamente.");
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      dosage: "",
      frequency: "",
      startDate: "",
      endDate: "",
      rfidCode: "",
    });
    setIsEditing(false);
    setStatusMessage("");
  };

  const navigate = useNavigate();

  const handleBackTohome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
       <div className="flex items-center justify-between w-full max-w-4xl mb-6">
      <h2 className="text-2xl font-semibold text-teal-600">Gestion de medicación</h2>
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-lg bg-teal-600 text-white"
         onClick={handleBackTohome}>Regresar</button>
      </div>
    </div>
      <MedicineForm
        form={form}
        isEditing={isEditing}
        onChange={handleInputChange}
        onSave={handleSaveMedicine}
        onScanRfid={handleScanRfid}
      />
      <MedicinesTable
        medicines={medicines}
        onEdit={handleEditMedicine}
        onDelete={handleDeleteMedicine}
      />
      <StatusMessage message={statusMessage} />
    </div>
  );
}

export default ManageMedicines;
