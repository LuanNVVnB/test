const express = require('express');
const AppRouting = express.Router();
const { CommonMethodConstant, ControllerConstant } = require("../constants/api.constant");
const {
    getAll,
    postLogin,
    postRegister,
    
} = require('../controllers/user.constroller');
 
AppRouting.get(`${CommonMethodConstant.GetAll}`, getAll);
AppRouting.post(`${CommonMethodConstant.PostLogin}`, postLogin);
AppRouting.post(`${CommonMethodConstant.PostRegister}`, postRegister);

module.exports = { AppRouting }; 