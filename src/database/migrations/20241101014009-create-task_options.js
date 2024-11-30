'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task_options', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      task_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'worksheet_tasks',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('task_options');
  }
};
