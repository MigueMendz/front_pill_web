import React from "react";
import HelpSection from "../Components/Help/HelpSection";
import { useNavigate } from "react-router-dom";

function Help() {
  const sections = [
    {
      title: "Inicio",
      description:
        "En el inicio encontrarás un resumen general de tu estado actual, estadísticas clave y accesos rápidos a las funcionalidades más importantes de la plataforma.",
    },
    {
      title: "Registro de Pacientes",
      description:
        "Aquí puedes registrar nuevos pacientes proporcionando información como nombre, edad, enfermedades y más. Utiliza el formulario paso a paso para completar el proceso.",
    },
    {
      title: "Programación de Medicación",
      description:
        "Configura horarios y frecuencia para las dosis de cada medicamento. Asegúrate de llenar toda la información requerida, como el nombre del medicamento, dosis, y tiempo entre tomas.",
    },
    {
      title: "Monitoreo en Tiempo Real",
      description:
        "Visualiza el cumplimiento de la medicación en tiempo real y recibe alertas sobre dosis no tomadas o posibles problemas de salud del paciente.",
    },
    {
      title: "Estadísticas",
      description:
        "Consulta gráficos interactivos y un resumen detallado del comportamiento de la medicación, así como el estado general del paciente.",
    },
    {
      title: "Notificaciones",
      description:
        "Revisa todas las notificaciones, incluyendo recordatorios de medicación y alertas de salud importantes. Las notificaciones incluyen una descripción detallada y se leen en voz alta.",
    },
    {
      title: "Configuración",
      description:
        "Personaliza tu experiencia en la plataforma, ajusta las configuraciones del perfil y administra opciones relacionadas con tus datos personales.",
    },
  ];

  const navigate = useNavigate();

  const handleBackTohome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="relative w-full mb-6">
  <h2 className="text-2xl font-semibold text-teal-600">Ayuda</h2>
  <button
    className="absolute top-0 right-0 px-4 py-2 rounded-lg bg-teal-600 text-white"
    onClick={handleBackTohome}
  >
    Regresar
  </button>
</div>


      <p className="text-gray-700 mb-8">
        Aquí encontrarás información útil sobre cómo usar cada sección de la
        plataforma. Si tienes más preguntas, no dudes en contactarnos.
      </p>
      <HelpSection sections={sections} />
    </div>
  );
}

export default Help;
