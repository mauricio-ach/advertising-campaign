const { User } = require('../../models');

class UserRepository {

    async create(userData) {
        return await User.create(userData);
    }

    async findByEmail(email) {
        return await User.findOne({
            where: {
                email: email,
            }
        });
    }

    async saveUser(user) {
        return await user.save();
    }
}

module.exports = new UserRepository();