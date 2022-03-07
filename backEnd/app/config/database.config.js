const dotenv = require('dotenv');  
dotenv.config({ path: '.env' });
require('dotenv').config();

//Initialising Database
const dbConfig = {
    DB: process.env.DB,
    HOST:process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
   
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};

//Initialising Sequelize in the Database
const {Sequelize} = require("sequelize");
const db = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
    
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
);
module.exports = db;
