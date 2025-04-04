const express = require('express');
const DashboardController = require('../controllers/DashboardController');
const checkAuth = require('../middlewares/CheckAuth');

const router = express.Router();

router.get('/', checkAuth, DashboardController.getDashboardStats);

module.exports = router;