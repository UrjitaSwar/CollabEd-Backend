const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const httpServer = http.createServer(app);

const io = socketIo(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
  }
});

io.on("connection", (socket) => {
  socket.handshake.headers.origin = "*";

  console.log(`Client connected: ${socket.id}`);
  
  socket.on("send-changes",()=>{
    console.log("changes done")
    io.emit("receive-changes");
  })
  
  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const PORT = 3001;

httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});
