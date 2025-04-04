checkNullValue = (value) => {
    if (value === null || value === undefined ) {
        return true;
    }
    return false;
}

checkEmptyValue = (value) => {
    if (value === '') {
        return true;
    }
    return false;
}

checkDecimalValue = (value) => {
    const number = parseFloat(value);
    if (isNaN(number)) {
        return false;
    }
    if (value >= 0) {
        return true;
    }
    return false;
}

checkStatusValue = (value) => {
    if (value === 'active' || value === 'paused' || value === 'completed') {
        return true;
    }
    return false;
}

module.exports = {
    checkNullValue,
    checkEmptyValue,
    checkDecimalValue,
    checkStatusValue,
}