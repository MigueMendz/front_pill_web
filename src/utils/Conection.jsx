import { io } from "socket.io-client";

const socket = io("http://localhost:8083", {
  secure: true,
  transports: ["websocket"],
  withCredentials: true,
});

export default socket;
