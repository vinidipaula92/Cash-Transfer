const models = require('../database/models');

const accountService = {
  async getById(id) { 
    const account = await models.account.findByPk(
      id,
      {
        include: [
        { model: models.user, as: 'userInfo', attributes: { exclude: ['password', 'id', 'accountId']} },
        { model: models.transaction, as: 'debitedTransactions', attributes: { exclude: ['debitedAccountId', 'creditedAccountId']} },
        { model: models.transaction, as: 'creditedTransactions', attributes: { exclude: ['debitedAccountId', 'creditedAccountId'] } },
        ],
      },
    );
    return account;
  },
}

module.exports = accountService;