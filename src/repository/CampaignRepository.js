const { Campaign } = require('../../models');

class CampaignRepository {

    async create(campaignData) {
        return await Campaign.create(campaignData);
    }

    async findAll() {
        return await Campaign.findAll();
    }

    async findAllByStatus(status) {
        return await Campaign.findAll({
            where: {
                status: status,
            }
        })
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

    async getTotalCampaigns() {
        return await Campaign.count();
    }

    async getTotalBudget() {
        return await Campaign.sum('budget');
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