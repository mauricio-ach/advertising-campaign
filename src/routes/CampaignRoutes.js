const express = require('express');
const CampaignController = require('../controllers/CampaignController');
const checkAuth = require('../middlewares/CheckAuth');

const router = express.Router();

router.post('/', checkAuth, CampaignController.createCampaign);
router.patch('/:campaign_id', checkAuth, CampaignController.updateCampaign);

module.exports = router;