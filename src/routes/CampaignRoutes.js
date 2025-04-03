const express = require('express');
const CampaignController = require('../controllers/CampaignController');
const checkAuth = require('../middlewares/CheckAuth');

const router = express.Router();

router.post('/', checkAuth, CampaignController.createCampaign);

module.exports = router;