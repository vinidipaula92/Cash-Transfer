'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts',
      [{
        id: 1,
        balance: 1000,
      },
      {
        id: 2,
        balance: 1000,
      },
      ],
      {timestamps: false});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
