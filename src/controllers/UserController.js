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

const loginUser = async (req, res) => {
    try {
        const token = await UserService.loginUser(req.body);
        console.log(token);
        if (token) {
            // Set the token in a cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: 3600000 // 1 hour
            });

            res.status(200).json({
                message: 'User logged in',
            });
        } else {
            res.status(401).json({
                message: 'Invalid credentials',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const logOutUser = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({
            message: 'User logged out',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    logOutUser,
}