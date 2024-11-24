import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/App";
import { BrowserRouter } from "react-router-dom";
import "./Styles/input.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
