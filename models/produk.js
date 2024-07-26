const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produk = sequelize.define('Produk', {
  produkId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deskripsi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  harga: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stok: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Produk;
