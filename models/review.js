const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  produkId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  penggunaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  komentar: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Review;
