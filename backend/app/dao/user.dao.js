const db = require("../models/index");
const User = db.user;
const Operation = db.Sequelize.Op;

function userCreate(user) {
  var newUser = new User(user);
  return newUser.save();
}

function findAll() {
  return User.findAll();
}

function findByID(individualId) {
  return User.findAll({
    where: {
      id: {
        [Operation.or]: individualId,
      },
    },
  });
}

function finduser(id) {
  return User.findByPk(id);
}

var userDao = {
  userCreate: userCreate,
  findAll: findAll,
  findByID: findByID,
  finduser: finduser,
};

module.exports = userDao;
