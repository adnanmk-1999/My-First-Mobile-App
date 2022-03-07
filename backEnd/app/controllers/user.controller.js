const userDao = require("../dao/user.dao");

var bcrypt = require("bcryptjs");

function signUp(req, res) {
  let newUser = {
    Username: req.body.username,
    Email: req.body.email,
    Password: bcrypt.hashSync(req.body.password, 8),
    Contact: req.body.contact,
    Gender: req.body.gender,
    Name: req.body.name,
  };
  userDao
    .userCreate(newUser)
    .then(() => {
        res.send({ message: "User registered successfully!" });
      })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}

function getUsers(req, res) {
  userDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(401).send({ message: "users not found." });
    });
}

var userController = {
  signUp: signUp,
  getUsers: getUsers,
};

module.exports = userController;