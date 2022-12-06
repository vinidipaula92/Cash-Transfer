'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: Sequelize.INTEGER,
      defaultValue: 1000,
    },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};