const { Campaign } = require('../../models');

class CampaignRepository {

    async create(campaignData) {
        return await Campaign.create(campaignData);
    }

    async findById(campaignId) {
        return await Campaign.findOne({
            where: {
                id: campaignId,
            }
        });
    }

    async saveCampaign(campaign) {
        return await campaign.save();
    }
}

module.exports = new CampaignRepository();