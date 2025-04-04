const {
    checkNullValue,
    checkEmptyValue,
    checkDecimalValue,
    checkStatusValue,
} = require('../helpers/check-value');

const checkCampaign = (campaignData) => {
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
}

const checkCampaignUpdate = (campaignData) => {
    Object.keys(campaignData).forEach((key) => {
        if (key === 'title' || key === 'description' || key === 'start' || key === 'end' || key === 'budget' || key === 'status') {
            if (checkNullValue(campaignData[key]) || checkEmptyValue(campaignData[key])) {
                throw new Error(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
            }
        }
        if (key === 'budget') {
            if (!checkDecimalValue(campaignData[key])) {
                throw new Error('Budget must be a positive number');
            }
        }
        if (key === 'status') {
            if (!checkStatusValue(campaignData[key])) {
                throw new Error('Status must be active, paused or completed');
            }
        }
        if (key === 'user_id') {
            throw new Error('User ID cannot be updated');
        }
    })
}

module.exports = {
    checkCampaign,
    checkCampaignUpdate,
};