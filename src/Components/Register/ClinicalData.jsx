// ClinicalData.js
import React from 'react';
import { TextField } from '@mui/material';

function ClinicalData({ clinicalData, setClinicalData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicalData({
      ...clinicalData,
      [name]: value,
    });
  };

  return (
    <form className="space-y-4">
      <TextField
        fullWidth
        label="Enfermedades Preexistentes"
        variant="outlined"
        name="preexistingConditions"
        value={clinicalData.preexistingConditions}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Alergias"
        variant="outlined"
        name="allergies"
        value={clinicalData.allergies}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Grupo Sanguíneo"
        variant="outlined"
        name="bloodType"
        value={clinicalData.bloodType}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Peso"
        variant="outlined"
        name="weight"
        value={clinicalData.weight}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Condición Médica"
        variant="outlined"
        name="medicalCondition"
        value={clinicalData.medicalCondition}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Diagnósticos Recientes"
        variant="outlined"
        name="recentDiagnoses"
        value={clinicalData.recentDiagnoses}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default ClinicalData;
