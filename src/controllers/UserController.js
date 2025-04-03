const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json({
            message: 'User created',
            user: user,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    createUser,
}