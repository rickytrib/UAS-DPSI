const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dpsiuas', 'ricky', '2200016099', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
