const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

const URI = process.env.MYSQLURI;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(URI)
  }
  
  module.exports = sequelize;  