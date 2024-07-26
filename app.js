const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const produkRoutes = require('./routes/produk');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/produk', produkRoutes);

module.exports = app;
