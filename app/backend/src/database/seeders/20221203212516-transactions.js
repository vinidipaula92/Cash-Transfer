'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions',
      [{
        id: 1,
        debited_account_id: 1,
        credited_account_id: 2,
        value: 1000,
        created_at: new Date(),
      },
      {
        id: 2,
        debited_account_id: 2,
        credited_account_id: 1,
        value: 1000,
        created_at: new Date(),
      },
      ],
      {update_at: false});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};
