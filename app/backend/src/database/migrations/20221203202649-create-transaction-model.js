'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    debitedAccountId: {
      type: Sequelize.INTEGER,
      field: 'debited_account_id',
      references: {
        model: 'accounts',
        key: 'id',
      },
      foreignKey: true,
    },
    creditedAccountId: {
      type: Sequelize.INTEGER,
      field: 'credited_account_id',
      references: {
        model: 'accounts',
        key: 'id',
      },
      foreignKey: true,
    },
    value: Sequelize.INTEGER,
    createAt:  {
      type: Sequelize.DATE,
      field: 'created_at',
    }
    }, {
      tableName: 'transactions',
      timestamps: false,
      underscored: true,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};