'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('tbl_todo_lists', [
      {
        name_todo : "Mencuci Pakaian",
        desc_todo : "Mencuci pakaian kemarin dengan menggunakan pengharum",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name_todo : "Mencuci Piring",
        desc_todo : "Mencuci piring kemarin dengan menggunakan sunligth",
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
    await queryInterface.bulkDelete('tbl_todo_lists', null, {});
  }
};
