'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    cpf: Sequelize.STRING(11),
    password: Sequelize.STRING,
    accountId: {
      type: Sequelize.INTEGER,
      field: 'account_id',
      references: {
        model: 'accounts',
        key: 'id',
      },
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    }, {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};