import React from "react";

function FeaturesSection() {
  const features = [
    {
      title: "Monitoreo en Tiempo Real",
      description:
        "Supervisamos la medicación en tiempo real, notificando al usuario y sus familiares sobre el estado de salud.",
    },
    {
      title: "Estadísticas Detalladas",
      description:
        "Consulta gráficos y reportes sobre el cumplimiento de la medicación y la salud general del paciente.",
    },
    {
      title: "Notificaciones Inteligentes",
      description:
        "Recordatorios por voz y alertas para garantizar que no se pase ninguna dosis importante.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <h3 className="text-3xl font-semibold text-[#202022] mb-6 text-center">
          ¿Qué nos diferencia del resto?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#CACACA] rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-medium text-[#00747C] mb-2">
                {feature.title}
              </h4>
              <p className="text-[#202022]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
