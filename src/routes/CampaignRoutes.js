const express = require('express');
const CampaignController = require('../controllers/CampaignController');
const checkAuth = require('../middlewares/CheckAuth');
const { checkSuperAdmin } = require('../middlewares/CheckAdmin');

const router = express.Router();

router.post('/', checkAuth, CampaignController.createCampaign);
router.get('/:campaign_id', checkAuth, CampaignController.findCampaignById);
router.get('/all', checkAuth, CampaignController.findAllCampaigns);
router.get('/status/:status', checkAuth, CampaignController.findAllCampaignsByStatus);
router.patch('/:campaign_id', checkAuth, CampaignController.updateCampaign);
router.delete('/:campaign_id', checkAuth, checkSuperAdmin, CampaignController.deleteCampaign);

module.exports = router;