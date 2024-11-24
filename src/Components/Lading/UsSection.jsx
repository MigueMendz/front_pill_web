import React from "react";

function UsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h3 className="text-3xl font-semibold text-[#202022] mb-6">
          Nosotros
        </h3>
        <p className="text-lg text-[#202022] leading-relaxed">
          En <span className="text-[#00747C] font-semibold">PillCare</span>, creemos que la salud es lo más importante. 
          Nuestra misión es facilitar el cuidado de las personas mayores y sus seres queridos 
          mediante una plataforma innovadora que combina tecnología y accesibilidad. Con 
          herramientas como monitoreo en tiempo real, estadísticas detalladas y notificaciones 
          inteligentes, garantizamos que la medicación se administre correctamente y a tiempo. 
          ¡Tu tranquilidad y la de tus seres queridos son nuestra prioridad!
        </p>
      </div>
    </section>
  );
}

export default UsSection;
