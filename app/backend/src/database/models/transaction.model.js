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
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {
    tableName: 'transactions',
    updatedAt: false,
    underscored: true,
  });

  TransactionTable.associate = (models) => { 
    TransactionTable.belongsTo(models.account, {
      foreignKey: 'debitedAccountId',
      as: 'debitedAccount',
    });
  TransactionTable.belongsTo(models.account, {
    foreignKey: 'creditedAccountId',
    as: 'creditedAccount',
  });
  };

  return TransactionTable;
};

module.exports = transactionModel;