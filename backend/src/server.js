require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');

const app = require('./app');
const server = http.createServer(app);

const io = new Server(server, { 
  cors: { 
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" 
  } 
});

// Make sure this middleware is added BEFORE the routes
app.use((req, res, next) => { 
  req.io = io; 
  next(); 
});

const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    server.listen(PORT, () => console.log(`API on :${PORT}`));
  })
  .catch(console.error);
