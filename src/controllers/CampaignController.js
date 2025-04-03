const CampaignService = require('../services/CampaignService');

const createCampaign = async (req, res) => {
    try {
        const campaignData = req.body;
        campaignData.user_id = req.userData.id;
        const campaign = await CampaignService.createCampaign(campaignData);
        res.status(201).json({
            message: 'Campaign created',
            campaign: campaign,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
        
    }
}

module.exports = {
    createCampaign,
}