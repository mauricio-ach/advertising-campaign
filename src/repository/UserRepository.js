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
}

module.exports = new UserRepository();