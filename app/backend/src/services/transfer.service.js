const Joi = require('joi');
const { sequelize } = require('../database/models');
const models = require('../database/models');

const transferService = {
  validateBody(unknown) {
    const schema = Joi.object({
      value: Joi.number().required(),
      debitedAccountId: Joi.number().required(),
      creditedAccountId: Joi.number().required(),
    });

    const { error, value } = schema.validate(unknown);

    if (error) {
      error.message = 'Some required fields are missing';
      error.code = 400;
      throw error;
    }
    return value;
  },

  async create(transfer) {
    const t = await sequelize.transaction();
    const { value, debitedAccountId, creditedAccountId } = transfer;
    const debitedAccount = await models.account.findByPk(debitedAccountId);
    const creditedAccount = await models.account.findByPk(creditedAccountId);
    if (debitedAccount.balance < value) {
      const error = new Error('Insufficient funds');
      error.code = 400;
      throw error;
    }
    await models.account.update({ balance: debitedAccount.balance - value }, { where: { id: debitedAccountId } }, { transaction: t });
    await models.account.update({ balance: creditedAccount.balance + value }, { where: { id: creditedAccountId } }, { transaction: t });
    const createTransaction = await models.transaction.create({ value, debitedAccountId, creditedAccountId }, { transaction: t });
    await t.commit();
    return createTransaction;
   },

  async getAll() { 
    const transfers = await models.transaction.findAll({
      include: [
        { model: models.account, as: 'debitedAccount' },
        { model: models.account, as: 'creditedAccount' },
      ],
    });
    return transfers;
  },

  async getById(id) { 
    const transfer = await models.transaction.findByPk(
      id,
      {
        include: [
          { model: models.account, as: 'debitedAccount' },
          { model: models.account, as: 'creditedAccount' },
        ],
      },
    );
    return transfer;
  },

  async update(id, transfer) {
    const t = await sequelize.transaction();
    const { value, debitedAccountId, creditedAccountId } = transfer;
    const debitedAccount = await models.account.findByPk(debitedAccountId);
    const creditedAccount = await models.account.findByPk(creditedAccountId);
    if (debitedAccount.balance < value) {
      const error = new Error('Insufficient funds');
      error.code = 400;
      throw error;
    }
    await models.account.update({ balance: debitedAccount.balance - value }, { where: { id: debitedAccountId } }, { transaction: t });
    await models.account.update({ balance: creditedAccount.balance + value }, { where: { id: creditedAccountId } }, { transaction: t });
    const updateTransaction = await models.transaction.update({ value, debitedAccountId, creditedAccountId }, { where: { id } }, { transaction: t });
    await t.commit();
    return updateTransaction;
   },

  async delete(id) {
    const deletedTransfer = await models.transaction.destroy({ where: { id } });
    return deletedTransfer;
   },
}

module.exports = transferService;