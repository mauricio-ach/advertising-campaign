const express = require('express');
const UserController = require('../controllers/UserController');
const checkAuth = require('../middlewares/CheckAuth');
const { checkSuperAdmin } = require('../middlewares/CheckAdmin');

const router = express.Router();

router.post('/', UserController.createUser);
router.post('/admin', checkAuth, checkSuperAdmin, UserController.createUser);
router.post('/login', UserController.loginUser);
router.post('/logout', UserController.logOutUser);
router.get('/all', checkAuth, checkSuperAdmin, UserController.findAllUsers);

module.exports = router;