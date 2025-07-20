require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const app = require('./app'); // Your Express app

const server = http.createServer(app);

// --- Corrected Socket.IO CORS Configuration ---
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true // Added for consistency
  }
});

// Middleware to attach io to each request
app.use((req, res, next) => {
  req.io = io;
  next();
});

const PORT = process.env.PORT || 4000;

// --- Simplified, Single Database Connection ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });