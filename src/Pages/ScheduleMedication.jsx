import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import axios from 'axios';

function ScheduleMedication() {
  const [medication, setMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const frequencies = [
    { value: 'once', label: 'Una vez' },
    { value: 'daily', label: 'Diario' },
    { value: 'weekly', label: 'Semanal' },
    { value: 'monthly', label: 'Mensual' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedication({
      ...medication,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validate = () => {
    const newErrors = {};

    if (!medication.name) newErrors.name = 'El nombre del medicamento es obligatorio.';
    if (!medication.dosage) newErrors.dosage = 'La dosis es obligatoria.';
    if (!medication.frequency) newErrors.frequency = 'La frecuencia es obligatoria.';
    if (!medication.startDate) newErrors.startDate = 'La fecha de inicio es obligatoria.';
    if (!medication.endDate) newErrors.endDate = 'La fecha de fin es obligatoria.';
    else if (medication.endDate < medication.startDate) newErrors.endDate = 'La fecha de fin debe ser posterior a la fecha de inicio.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
  
      await axios.post('/api/medication', medication);
      alert('Medicación guardada exitosamente');
    } catch (error) {
      console.error('Error al guardar la medicación:', error);
      alert('Ocurrió un error al guardar la medicación');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Programar Medicación</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <form className="space-y-4" onSubmit={handleSubmit}>
        
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Detalles del Medicamento</h3>
            <TextField
              fullWidth
              label="Nombre del Medicamento"
              variant="outlined"
              name="name"
              value={medication.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              fullWidth
              label="Dosis (mg, ml, etc.)"
              variant="outlined"
              name="dosage"
              value={medication.dosage}
              onChange={handleInputChange}
              error={!!errors.dosage}
              helperText={errors.dosage}
              className="mt-4"
            />
            <TextField
              fullWidth
              select
              label="Frecuencia"
              variant="outlined"
              name="frequency"
              value={medication.frequency}
              onChange={handleInputChange}
              error={!!errors.frequency}
              helperText={errors.frequency}
              className="mt-4"
            >
              {frequencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Programación de la Dosis</h3>
            <TextField
              fullWidth
              label="Fecha de Inicio"
              type="date"
              variant="outlined"
              name="startDate"
              value={medication.startDate}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              error={!!errors.startDate}
              helperText={errors.startDate}
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
              error={!!errors.endDate}
              helperText={errors.endDate}
              className="mt-4"
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
              className="mt-4"
            />
          </div>

          {/* Botón de Guardar */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-teal-600 hover:bg-teal-700"
          >
            Guardar Programación
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ScheduleMedication;
