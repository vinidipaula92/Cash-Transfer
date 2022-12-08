'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [{
        name: 'Vinicius de Paula',
        cpf: '123.456.789-10',
        password: 'vinicius',
        account_id: 1,
      },
      {
        name: 'Roberta Dutra',
        cpf: '987.654.321-09',
        password: 'roberta',
        account_id: 2,
        },
      ],
      {timestamps: false});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
