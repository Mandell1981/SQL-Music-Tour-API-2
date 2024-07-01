'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greets', [
      {
        meet_greet_id: 1,
        event_id: 1,
        band_id: 1,
        meet_start_time: new Date('2024-06-30 14:30:00'),
        meet_end_time: new Date('2024-06-30 14:45:00'),
      },
      {
        meet_greet_id: 2,
        event_id: 2,
        band_id: 2,
        meet_start_time: new Date('2024-06-30 14:45:00'),
        meet_end_time: new Date('2024-06-30 15:00:00'),
      },
      {
        meet_greet_id: 3,
        event_id: 3,
        band_id: 3,
        meet_start_time: new Date('2024-06-30 15:00:00'),
        meet_end_time: new Date('2024-06-30 15:15:00'),
      }
    ],{});
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
    await queryInterface.bulkDelete('meet_greets', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
