'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        name: 'The Big Stage',
        date: new Date(),
        available_start_time: new Date(),
        end_time: new Date(),
      },
      {
        name: 'The Worst Concert Ever',
        date: new Date(),
        available_start_time: new Date(),
        end_time: new Date(),
        
        
      },
      {
        name: 'The Lame Stage',
        date: new Date(),
        available_start_time: new Date(),
        end_time: new Date(),
        
      
      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
