'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [{
        name: 'Vinicius de Paula',
        cpf: '123.456.789-10',
        password: '123456',
        account_id: 1,
      },
      {
        name: 'Roberta Dutra',
        cpf: '987.654.321-09',
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
