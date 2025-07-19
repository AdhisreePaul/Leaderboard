const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./routes/users');
const claimRoutes = require('./routes/claim');

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);

module.exports = app;
