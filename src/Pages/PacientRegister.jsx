import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Modal, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PatientInform from '../Components/Register/PatientInform';
import ClinicalData from '../Components/Register/ClinicalData';
import MedicationSchedule from '../Components/Register/MedicationSchedule';

function PacientRegister() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const idUsuario = localStorage.getItem("login_id");

  const [id_paciente, setIdPaciente] = useState('');


  const [patient, setPatient] = useState({
    id: idUsuario,
    fullName: '',
    gender: '',
    age: '',
    address: '',
    phone: '',
  });

  const [clinicalData, setClinicalData] = useState({
    preexistingConditions: '',
    allergies: '',
    bloodType: '',
    weight: '',
    medicalCondition: '',
    recentDiagnoses: '',
  });


  const steps = ['Datos del Paciente', 'Datos Clínicos', 'Confirmar Datos'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    // Datos del paciente
    const patientData = {
      id_usuario: idUsuario,
      nombre_completo: patient.fullName,
      genero: patient.gender,
      edad: patient.age,
      direccion: patient.address,
      telefono: patient.phone,
      condicion: clinicalData.medicalCondition,
      enfermedades_pers: clinicalData.preexistingConditions,
      alergias: clinicalData.allergies,
      grupo_sanguineo: clinicalData.bloodType,
      peso: clinicalData.weight,
      diagnostico_reciente: clinicalData.recentDiagnoses,
    };


    try {
      // Enviar datos del paciente a la API correspondiente
      const patientResponse = await axios.post('https://back-pillcare.zapto.org/patients/add', patientData);
      console.log('Paciente registrado:', patientResponse.data);

      // Mostrar modal de éxito
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
        navigate('/home'); // Redirigir después de 2 segundos
      }, 2000);

    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Hubo un error al registrar los datos.');
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    navigate('/home'); // Redirigir al cerrar el modal
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Registro del Paciente</h2>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mt-6">
        {activeStep === 0 && <PatientInform patient={patient} setPatient={setPatient} />}
        {activeStep === 1 && <ClinicalData clinicalData={clinicalData} setClinicalData={setClinicalData} />}

        <div className="flex justify-between mt-6">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Finalizar Registro
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Siguiente
            </Button>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #00747C',
            borderRadius: '16px',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h2" sx={{ color: '#00747C', mb: 2 }}>
            ¡Registro Exitoso!
          </Typography>
          <Typography sx={{ mb: 2 }}>
            El paciente ha sido registrado correctamente.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default PacientRegister;
