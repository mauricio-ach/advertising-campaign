const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

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

const findAllUsers = async (req, res) => {
    try {
        const users = await UserService.findAllUsers();
        return res.status(200).json({
            message: 'Users found',
            users: users,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        })
    }
}

const isAuthenticated = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            isAuthenticated: false,
        });
    }

    try {
        jwt.verify(token, JWT_SECRET);
        return res.status(200).json({
            isAuthenticated: true,
        });
    } catch (error) {
        return res.status(401).json({
            isAuthenticated: false,
        });
    }
}

module.exports = {
    createUser,
    loginUser,
    logOutUser,
    findAllUsers,
    isAuthenticated,
}