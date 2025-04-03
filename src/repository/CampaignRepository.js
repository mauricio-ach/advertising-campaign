const { Campaign } = require('../../models');

class CampaignRepository {

    async create(campaignData) {
        return await Campaign.create(campaignData);
    }

    async updateCampaign(campaignId, campaignData) {
        return await Campaign.update(campaignData, {
            where: {
                id: campaignId,
            }
        });
    }
}

module.exports = new CampaignRepository();