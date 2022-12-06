const transactionModel = (sequelize, DataTypes) => { 
  const TransactionTable = sequelize.define('transaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    debitedAccountId: DataTypes.INTEGER,
    creditedAccountId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
  }, {
    tableName: 'transactions',
    updateAt: false,
    underscored: true,
  });

  TransactionTable.associate = (models) => { 
    TransactionTable.belongsTo(models.account, {
      foreignKey: 'debitedAccountId',
      as: 'debitedAccounts',
    });
  TransactionTable.belongsTo(models.account, {
    foreignKey: 'creditedAccountId',
    as: 'creditedAccounts',
  });
  };

  return TransactionTable;
};

module.exports = transactionModel;