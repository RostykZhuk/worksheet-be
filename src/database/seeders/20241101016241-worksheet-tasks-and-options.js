'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create tasks first
    const tasks = [
      {
        id: uuidv4(),
        instruction: 'What is the capital of France?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        instruction: 'What is 2 + 2?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        instruction: 'Which planet is known as the Red Planet?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('worksheet_tasks', tasks);

    // Create options for each task
    const options = [
      // Options for task 1
      {
        id: uuidv4(),
        text: 'Paris',
        isCorrect: true,
        task_id: tasks[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: 'Rome',
        isCorrect: false,
        task_id: tasks[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: 'Berlin',
        isCorrect: false,
        task_id: tasks[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: 'Madrid',
        isCorrect: false,
        task_id: tasks[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Options for task 2
      {
        id: uuidv4(),
        text: '3',
        isCorrect: false,
        task_id: tasks[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: '1',
        isCorrect: false,
        task_id: tasks[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: '5',
        isCorrect: false,
        task_id: tasks[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: '4',
        isCorrect: true,
        task_id: tasks[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Options for task 3
      {
        id: uuidv4(),
        text: 'Earth',
        isCorrect: false,
        task_id: tasks[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: 'Mars',
        isCorrect: true,
        task_id: tasks[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: 'Jupiter',
        isCorrect: false,
        task_id: tasks[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        text: 'Venus',
        isCorrect: false,
        task_id: tasks[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('task_options', options);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('task_options', null, {});
    await queryInterface.bulkDelete('worksheet_tasks', null, {});
  }
}; 