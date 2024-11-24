// MedicationSchedule.js
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const frequencies = [
  { value: 'once', label: 'Una vez' },
  { value: 'daily', label: 'Diario' },
  { value: 'weekly', label: 'Semanal' },
  { value: 'monthly', label: 'Mensual' },
];

function MedicationSchedule({ medication, setMedication }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedication({
      ...medication,
      [name]: value,
    });
  };

  return (
    <form className="space-y-4">
      <TextField
        fullWidth
        label="Nombre del Medicamento"
        variant="outlined"
        name="name"
        value={medication.name}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Dosis (mg, ml, etc.)"
        variant="outlined"
        name="dosage"
        value={medication.dosage}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        select
        label="Frecuencia"
        variant="outlined"
        name="frequency"
        value={medication.frequency}
        onChange={handleInputChange}
      >
        {frequencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        label="Frecuencia de Horas"
        variant="outlined"
        name="hoursInterval"
        value={medication.hoursInterval}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Fecha de Inicio"
        type="date"
        variant="outlined"
        name="startDate"
        value={medication.startDate}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="Fecha de Fin"
        type="date"
        variant="outlined"
        name="endDate"
        value={medication.endDate}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="Notas adicionales"
        variant="outlined"
        name="notes"
        value={medication.notes}
        onChange={handleInputChange}
        multiline
        rows={3}
      />
    </form>
  );
}

export default MedicationSchedule;
