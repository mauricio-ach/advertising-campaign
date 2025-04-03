const CampaignRepository = require('../repository/CampaignRepository');
const { checkCampaign, checkCampaignUpdate } = require('../helpers/check-campaign');

class CampaignService {
    
    async createCampaign(campaignData) {
        checkCampaign(campaignData);
        const campaign = await CampaignRepository.create(campaignData);
        return campaign;
    }

    async updateCampaign(campaignId, campaignData) {
        const campaign = await CampaignRepository.findById(campaignId);
        if (!campaign) {
            throw new Error('Campaign not found');
        }
        checkCampaignUpdate(campaignData);
        Object.keys(campaignData).forEach((key) => {
            campaign[key] = campaignData[key];
        });

        await CampaignRepository.saveCampaign(campaign);
        return campaign;
    }

    async deleteCampaign(campaignId) {
        const campaign = await CampaignRepository.findById(campaignId);
        if (!campaign) {
            throw new Error('Campaign not found');
        }
        await CampaignRepository.deleteCampaign(campaignId);
    }
}

module.exports = new CampaignService();