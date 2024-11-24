import React, { useEffect } from "react";
import socket from "../utils/Conection";

function TestSocketConnection() {
  useEffect(() => {
    socket.on("serverMessage", (message) => {
      console.log("Mensaje del servidor:", message);
    });

    return () => {
      socket.off("serverMessage");
    };
  }, []);

  return <div>Verifica la consola para el mensaje del servidor.</div>;
}

export default TestSocketConnection;
