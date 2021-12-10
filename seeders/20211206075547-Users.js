'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tbl_users', [
      {
        name : "Agus",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Joni",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('tbl_users', null, {});
  }
};
