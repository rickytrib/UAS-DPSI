const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pesanan = sequelize.define('Pesanan', {
  pesananId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tanggal: {
    type: DataTypes.DATE,
    allowNull: false
  },
  totalHarga: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Pesanan;
