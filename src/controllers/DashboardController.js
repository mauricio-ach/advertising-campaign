const CampaignService = require('../services/CampaignService');

const getDashboardStats = async (req, res) => {
    try {
        const data = await CampaignService.getDashboardStats();
        return res.status(200).json({
            message: 'Dashboard data found',
            data: data,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getDashboardStats,
}