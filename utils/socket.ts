import io from "socket.io-client";

const SOCKET_URL = "wss://ws.postman-echo.com/socketio";
const socket = io.connect(SOCKET_URL, {
  transports: ["websocket"],
  reconnectionAttempts: 15,
});

export default socket;
