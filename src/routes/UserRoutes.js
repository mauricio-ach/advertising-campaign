const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/', UserController.createUser);
router.post('/login', UserController.loginUser);

module.exports = router;