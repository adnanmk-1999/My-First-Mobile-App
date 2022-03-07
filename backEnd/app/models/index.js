const sequelize = require('../config/database.config')
const db = {};

const Sequelize = require("sequelize");
db.Sequelize = Sequelize

db.sequelize = sequelize
db.user = require("../models/user.model.js");
  
module.exports = db;