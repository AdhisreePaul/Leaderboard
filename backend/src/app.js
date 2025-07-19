const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./routes/users');
const claimRoutes = require('./routes/claim');

const app = express();
app.use(cors({ 
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  credentials: true 
}));
app.use(express.json());
app.use(morgan('dev'));

// Add health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);

module.exports = app;
