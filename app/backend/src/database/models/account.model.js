const { DataTypes } = require('sequelize');

const accountModel = (sequelize, DataTypes) => { 
  const AccountTable = sequelize.define('account', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: DataTypes.INTEGER,
  }, {
    tableName: 'accounts',
    timestamps: false,
  });

  AccountTable.associate = (models) => {
    AccountTable.hasMany(models.transaction, {
      foreignKey: 'debitedAccountId',
      as: 'debitedTransactions',
    });
  AccountTable.hasMany(models.transaction, {
    foreignKey: 'creditedAccountId',
    as: 'creditedTransactions',
  });
}
  return AccountTable;
};

module.exports = accountModel;