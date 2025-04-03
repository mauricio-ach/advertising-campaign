const UserRepository = require('../repository/UserRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

class UserService {
    async createUser(userData) {

        if (!userData.email || userData.email === '') {
            throw new Error('Email is required');
        }

        if (!userData.password || userData.password === '') {
            throw new Error('Password is required');
        }

        if (!userData.name || userData.name === '') {
            throw new Error('Name is required');
        }

        if (!userData.last_name || userData.last_name === '') {
            throw new Error('Surname is required');
        }

        const userRegistered = await UserRepository.findByEmail(userData.email);
        if (userRegistered) {
            throw new Error('User already registered');
        }

        userData.last_login = new Date();

        if (userData.isSuperAdmin) userData.roles = {
            user: true,
            admin: true,
            super_admin: true,
        };

        const plainPassword = userData.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        userData.password = hashedPassword;

        const user = await UserRepository.create(userData);
        return user;
    }

    async loginUser(userData) {
        if (!userData.email || userData.email === '') {
            throw new Error('Email is required');
        }

        if (!userData.password || userData.password === '') {
            throw new Error('Password is required');
        }

        const user = await UserRepository.findByEmail(userData.email);
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(userData.password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            roles: user.roles,
        }, JWT_SECRET);

        user.last_login = new Date();

        await UserRepository.saveUser(user);

        return {
            message: 'Login successful',
            token: token,
        };
    }
}

module.exports = new UserService();