import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate  } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";  


function LoginForm() {
  const [formData, setFormData] = useState({
    direccion_Email: "",
    contraseña: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth(); // Usa el método login del contexto
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8083/auth/login", formData);
      console.log("Respuesta del servidor:", response.data);

      localStorage.setItem("login_id", response.data.user.id_usuario);
      localStorage.setItem("login_nombre", response.data.user.nombre);
      localStorage.setItem("login_email", response.data.user.direccion_Email); 

      localStorage.setItem("id_user", response.data.id);  
      localStorage.setItem("token", response.data.token);

      // Guarda el token en el contexto y redirige
      login(response.data.token); 
      console.log("token", response.data.token);
      
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage(
        error.response?.data?.message || "Ocurrió un error al iniciar sesión"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[550px] h-[600px] bg-[#FDFDFD] rounded-3xl flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">
          Inicia sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
          {/* Campos de entrada */}
          <div className="relative">
            <input
              type="email"
              name="direccion_Email"
              value={formData.direccion_Email}
              onChange={handleChange}
              id="direccion_Email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#42858C] bg-[#FDFDFD] rounded-[10px] border border-[#42858C] appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="direccion_Email"
              className="absolute text-sm text-[#42858C] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Correo electrónico
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              id="contraseña"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#42858C] bg-[#FDFDFD] rounded-[10px] border border-[#42858C] appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="contraseña"
              className="absolute text-sm text-[#42858C] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Contraseña
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300 transform active:scale-95 no-underline text-center block"
          >
            Ingresar
          </button>
        </form>
        <div className="mt-4 flex justify-center items-center text-sm">
          <span className="text-gray-600 mr-1">¿No estás registrado?</span>
          <Link to="/signup" className="text-teal-600 hover:underline">
            Hazlo aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
