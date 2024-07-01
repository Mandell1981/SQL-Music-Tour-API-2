'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [
      {name: 'Brothers Wild', genre: 'House', available_start_time: new Date(), end_time: new Date()},
      {name: 'The Flying Dutchman', genre: 'House', available_start_time: new Date(), end_time: new Date()},
      {name: 'The Funky Bunch', genre: 'Funk', available_start_time: new Date(), end_time: new Date()},
      {name: 'Home Alone', genre: 'House', available_start_time: new Date(), end_time: new Date()},
      {name: 'Led Pipe', genre: 'Funk', available_start_time: new Date(), end_time: new Date()},
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
    await queryInterface.bulkDelete('bands', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
