const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require('dotenv');  
dotenv.config({ path: './env' });
require('dotenv').config();

//server.js

var corsOptions = {
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  };
  app.use(cors(corsOptions));

  
const db = require('./app/config/database.config');
db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my first app backend" });
});


app.use('/', require('./app/routes/index'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const dbCreate = require("./app/models/index");
dbCreate.sequelize.sync();

