import React from "react";
import { Link } from "react-router-dom";
import pillwhite from '../../assets/pillwhite.png'

function HeaderMain() {
  return (
    <header className="flex justify-between items-center px-8 py-0 bg-[#00747C] shadow-md h-28">
     <img src={pillwhite} className="w-[250px] h-[251px]" alt="Pill Image" />

     <h2 className="text-white"> La tecnología al servicio de tu bienestar</h2>

      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-white text-[#00747C] rounded hover:bg-[#00BBC9] hover:text-black transition duration-300 no-underline"
        >
          Iniciar sesión
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-[#00BBC9] text-white rounded hover:bg-[#00747C] transition duration-300 no-underline"
        >
          Crear cuenta
        </Link>
      </div>
    </header>
  );
}

export default HeaderMain;
