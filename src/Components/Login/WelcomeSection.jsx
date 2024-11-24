import React from "react";
import LOGO from "../../assets/LOGO.png";
import imageone from "../../assets/imageone.png";

function WelcomeSection() {
  return (
    <div className=" md:grid-cols-2 min-h-screen items-center">
      <div className="flex flex-col items-center justify-center ">
        <img src={LOGO} width={300} alt="Logo" className="max-w-full" />
        <h1 className="text-3xl font-semibold text-teal-600 text-center">
          ¡Qué bueno es <br />
          tenerte de vuelta!
        </h1>
      </div>

 
      <div className="flex flex-col items-center justify-center p-10">
        <img
          src={imageone}
          width={650}
          height={400}
          alt="Imagen de bienvenida"
          className="max-w-full"
        />
      </div>
    </div>
  );
}

export default WelcomeSection;
