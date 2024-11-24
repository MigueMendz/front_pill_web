import React from 'react';
import { TextField } from '@mui/material';

function PatientInform({ patient, setPatient }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  return (
    <form className="space-y-4">
      <TextField
        fullWidth
        label="Nombre Completo"
        variant="outlined"
        name="fullName"
        value={patient.fullName}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Género"
        variant="outlined"
        name="gender"
        value={patient.gender}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Edad"
        type="number"
        variant="outlined"
        name="age"
        value={patient.age}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Dirección"
        variant="outlined"
        name="address"
        value={patient.address}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Teléfono"
        variant="outlined"
        name="phone"
        value={patient.phone}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default PatientInform;
