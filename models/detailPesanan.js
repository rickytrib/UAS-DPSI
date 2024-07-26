const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetailPesanan = sequelize.define('DetailPesanan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  produkId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  harga: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = DetailPesanan;
