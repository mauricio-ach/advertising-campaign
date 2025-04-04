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

const findAllCampaigns = async (req, res) => {
    try {
        const campaigns = await CampaignService.findAllCampaigns();
        return res.status(200).json({
            message: 'Campaigns found',
            campaigns: campaigns,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const findAllCampaignsByStatus = async (req, res) => {
    try {
        const status = req.params.status;
        const campaigns = await CampaignService.findAllCampaignsByStatus(status);
        return res.status(200).json({
            message: 'Campaigns found',
            campaigns: campaigns,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const updateCampaign = async (req, res) => {
    try {
        const campaignId = req.params.campaign_id;
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'No data to update',
            });
        }
        await CampaignService.updateCampaign(campaignId, req.body);
        res.status(200).json({
            message: 'Campaign updated',
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const deleteCampaign = async (req, res) => {
    try {
        const campaignId = req.params.campaign_id;
        await CampaignService.deleteCampaign(campaignId);
        res.status(200).json({
            message: 'Campaign deleted',
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    createCampaign,
    findAllCampaigns,
    findAllCampaignsByStatus,
    updateCampaign,
    deleteCampaign,
}