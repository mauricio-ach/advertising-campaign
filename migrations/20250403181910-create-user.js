'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
      },
      last_name: {
        type: Sequelize.STRING(150),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      roles: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: JSON.stringify({
            user: true,
            admin: true,
            super_admin: false,
        }),
        validate: {
            notEmpty: true,
        }
      },
      last_login: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
        validate: {
            isDate: true,
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};