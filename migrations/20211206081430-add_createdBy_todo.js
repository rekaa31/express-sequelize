'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'tbl_todo_lists', //Nama Tabel Tujuan yang mau di tambahkan
      'createdBy', //Nama Kolom yang mau ditambahkan
      {
        type : Sequelize.INTEGER,
        references : {
          model : 'tbl_users',
          key : 'id'
        },
        allowNull : false,
        foreignKey : true
      } 
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'tbl_users', // name of Source model
      'createdBy' // key we want to remove
    );
  }
};
