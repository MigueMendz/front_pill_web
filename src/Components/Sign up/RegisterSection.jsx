import React from "react";
import LOGO from "../../assets/LOGO.png";
import imagetwo from "../../assets/imagetwo.png";

function RegisterSection() {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <img src={LOGO} />
      <h1 className="text-3xl font-semibold text-teal-600 mb-6">
        ¡Monitorea
        <br />
        tu salud!
      </h1>
      <img src={imagetwo} />
    </div>
  );
}

export default RegisterSection;
