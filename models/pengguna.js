const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pengguna = sequelize.define('Pengguna', {
  penggunaId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  kataSandi: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Pengguna;
