'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [{
        name: 'Vinicius de Paula',
        cpf: 12345678910,
        password: '123456',
        account_id: 1,
      },
      {
        name: 'Roberta Dutra',
        cpf: 98765432109,
        password: '987654',
        account_id: 2,
        },
      ],
      {timestamps: false});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
