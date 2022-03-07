const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const verifySignUp  = require('../middlewares/verifySignUp');

userRouter.post('/register', verifySignUp.checkDuplicateUsernameOrEmail, userController.signUp);
// userRouter.post('/login', userController.signIn);

//Get all user details
userRouter.get('/', userController.getUsers)

module.exports = userRouter;