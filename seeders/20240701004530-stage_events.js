'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage_events', [
      {
        stage_events_id: 1,
        stage_id: 1,
        event_id: 1,
      },
      {
        stage_events_id: 2,
        stage_id: 2,
        event_id: 2,
      },
      {
        stage_events_id: 3,
        stage_id: 3,
        event_id: 3,
      },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage_events', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
