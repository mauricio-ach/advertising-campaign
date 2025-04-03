const CampaignRepository = require('../repository/CampaignRepository');
const {
    checkNullValue,
    checkEmptyValue,
    checkDecimalValue,
    checkStatusValue,
} = require('../helpers/check-value');

class CampaignService {
    
    async createCampaign(campaignData) {
        if (checkNullValue(campaignData.title) || checkEmptyValue(campaignData.title)) {
            throw new Error('Title is required');
        }
        if (checkNullValue(campaignData.description) || checkEmptyValue(campaignData.description)) {
            throw new Error('Description is required');
        }
        if (checkNullValue(campaignData.start) || checkEmptyValue(campaignData.start)) {
            throw new Error('Start date is required');
        }
        if (checkNullValue(campaignData.end) || checkEmptyValue(campaignData.end)) {
            throw new Error('End date is required');
        }
        if (checkNullValue(campaignData.budget) || checkEmptyValue(campaignData.budget)) {
            throw new Error('Budget is required');
        }
        if (!checkDecimalValue(campaignData.budget)) {
            throw new Error('Budget must be a positive number');
        }
        if (checkNullValue(campaignData.status) || checkEmptyValue(campaignData.status)) {
            throw new Error('Status is required');
        }
        if (!checkStatusValue(campaignData.status)) {
            throw new Error('Status must be active, paused or completed');
        }
        if (checkNullValue(campaignData.user_id) || checkEmptyValue(campaignData.user_id)) {
            throw new Error('User ID is required');
        }

        const campaign = await CampaignRepository.create(campaignData);
        return campaign;
    }
}

module.exports = new CampaignService();