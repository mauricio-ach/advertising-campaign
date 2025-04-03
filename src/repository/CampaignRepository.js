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

    async deleteCampaign(campaignId) {
        return await Campaign.destroy({
            where: {
                id: campaignId,
            }
        });
    }
}

module.exports = new CampaignRepository();