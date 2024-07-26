const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Keranjang = sequelize.define('Keranjang', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  penggunaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalHarga: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Keranjang;
