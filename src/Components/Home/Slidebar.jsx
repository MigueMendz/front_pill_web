import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaEye,
  FaPills,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import LOGO from "../../assets/LOGO.png";
import LogoutModal from "./LogoutModal";



function Slidebar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleLogout = () => {
    closeModal();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="w-60 bg-[#FDFDFD] text-teal-600 h-screen p-6 shadow-lg flex flex-col justify-between">

      <div>
      <img src={LOGO} alt="Logo" className="mt-0 h-1/2" style={{ height: "50%" }}/>


        <ul className="space-y-6 list-none">
          <li className="flex items-center group">
            <FaHome className="mr-3 text-teal-600 group-hover:text-[#202022] transition duration-300" />
            <Link
              to="/home"
              className="font-medium no-underline text-[#202022] group-hover:text-white transition duration-300 px-2 py-1 rounded-md group-hover:bg-teal-600"
            >
              Resumen
            </Link>
          </li>
          <li className="flex items-center group">
            <FaChartBar className="mr-3 text-teal-600 group-hover:text-[#202022] transition duration-300" />
            <Link
              to="/stats"
              className="font-medium no-underline text-[#202022] group-hover:text-white transition duration-300 px-2 py-1 rounded-md group-hover:bg-teal-600"
            >
              Estadísticas
            </Link>
          </li>
          <li className="flex items-center group">
            <FaEye className="mr-3 text-teal-600 group-hover:text-[#202022] transition duration-300" />
            <Link
              to="/monitoring"
              className="font-medium no-underline text-[#202022] group-hover:text-white transition duration-300 px-2 py-1 rounded-md group-hover:bg-teal-600"
            >
              Monitorear
            </Link>
          </li>
          <li className="flex items-center group">
            <FaPills className="mr-3 text-teal-600 group-hover:text-[#202022] transition duration-300" />
            <Link
              to="/medicines"
              className="font-medium no-underline text-[#202022] group-hover:text-white transition duration-300 px-2 py-1 rounded-md group-hover:bg-teal-600"
            >
              Medicación
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="mt-12 border-t border-[#CACACA] pt-6">
          <p className="text-teal-600 font-semibold mb-6">General</p>
          <ul className="space-y-6 list-none">
            <li className="flex items-center group">
              <FaCog className="mr-3 text-teal-600 group-hover:text-[#202022] transition duration-300" />
              <Link
                to="/settings"
                className="text-[#202022] group-hover:text-white no-underline transition duration-300 px-2 py-1 rounded-md group-hover:bg-teal-600"
              >
                Configuración
              </Link>
            </li>
            <li className="flex items-center group">
              <FaQuestionCircle className="mr-3 text-teal-600 group-hover:text-[#202022] transition duration-300" />
              <Link
                to="/help"
                className="text-[#202022] group-hover:text-white no-underline transition duration-300 px-2 py-1 rounded-md group-hover:bg-teal-600"
              >
                Ayuda
              </Link>
            </li>
            <li className="flex items-center group">
              <FaSignOutAlt className="mr-3 text-teal-600 group-hover:text-red-500 transition duration-300" />
              <button
                onClick={openModal}
                className="text-[#202022] group-hover:text-red-500 no-underline bg-transparent border-none cursor-pointer px-2 py-1 rounded-md group-hover:bg-red-100 transition duration-300"
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>

      <LogoutModal
        isOpen={showModal}
        onClose={closeModal}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default Slidebar;
