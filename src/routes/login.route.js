const express = require('express');

const router = express.Router();

const loginController = require('../controller/login.controller');


router.get('/login', loginController.getLoginPage);

router.post('/login', loginController.login);

module.exports = router;