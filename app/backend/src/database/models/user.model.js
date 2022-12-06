const { DataTypes } = require('sequelize');

const UserModel = (sequelize, DataTypes) => { 
  const UserTable = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING(11),
    password: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  UserTable.associate = (models) => { 
    UserTable.belongsTo(models.account, {
      foreignKey: 'accountId',
      as: 'userInfo',
    });
  };

  return UserTable;
};

module.exports = UserModel;