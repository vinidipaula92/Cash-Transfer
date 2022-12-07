const Joi = require('joi');
const models = require('../database/models');

const transferService = {
  validateBody(unknown) {
    const schema = Joi.object({
      value: Joi.number().required(),
      debitedAccountCPF: Joi.string().required(),
      creditedAccountCPF: Joi.string().required(),
      description: Joi.string().required(),
      password: Joi.string().required(),
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
    const { value, debitedAccountCPF, creditedAccountCPF, description, password } = transfer;
    const accountCred = await models.user.findOne({ where: { cpf: creditedAccountCPF } });
    const accountDeb = await models.user.findOne({ where: { cpf: debitedAccountCPF, password } });
    if (!accountDeb) {
      const error = new Error('Credentials not found');
      error.code = 400;
      throw error;
    }
    const { id: creditedAccountId } = accountCred;
    const { id: debitedAccountId } = accountDeb;
    const debitedAccount = await models.account.findByPk(debitedAccountId);
    const creditedAccount = await models.account.findByPk(creditedAccountId);
    if (debitedAccount.balance < value) {
      const error = new Error('Insufficient funds');
      error.code = 400;
      throw error;
    }
    const newBalanceCred = creditedAccount.balance + value;
    const newBalanceDeb = debitedAccount.balance - value;
    await models.account.update({ balance: newBalanceDeb }, { where: { id: debitedAccountId } });
    await models.account.update({ balance: newBalanceCred }, { where: { id: creditedAccountId } });
    const newTransfer = await models.transaction.create({ value, debitedAccountId, creditedAccountId, description });
    return newTransfer;
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
}

module.exports = transferService;