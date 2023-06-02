'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

  
    return Promise.all([
      await queryInterface.addColumn( "Users", "prueba", { type: Sequelize.DataTypes.STRING }),
      await queryInterface.addColumn("Users","prueba2",{type: Sequelize.DataTypes.STRING}),
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      await queryInterface.removeColumn("Users", "prueba",),
      await queryInterface.removeColumn("Users","prueba2",),
    ])
  }
};
