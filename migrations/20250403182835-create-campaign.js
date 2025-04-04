'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
            isInt: true,
            notEmpty: true,
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active', 'paused', 'completed'],
        allowNull: false,
        defaultValue: 'active',
        validate: {
            isIn: [['active', 'paused', 'completed']],
        },
      },
      budget: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.00,
        validate: {
            isDecimal: true,
            min: 0,
        }
      },
      start: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
        },
      },
      end: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
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
    await queryInterface.dropTable('Campaigns');
  }
};