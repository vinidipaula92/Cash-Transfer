const Joi = require('joi');
const { sequelize } = require('../database/models');
const models = require('../database/models');

const userService = {
  validateBody(unknown) {
    const schema = Joi.object({
      name: Joi.string().required(),
      cpf: Joi.number().min(11).required(),
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

  async create(user) {
    const t = await sequelize.transaction();
    try {
      const createAccountId = await models.account.create({ balance: 1000 }, { transaction: t });
      const createUserId = await models.user.create({ ...user, accountId: createAccountId.id }, { transaction: t });
      await t.commit();
      return createUserId;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },

  async getAll() { 
    const users = await models.user.findAll({
      attributes: { exclude: ['password', 'id'] },
    });
    return users;
  },

  async getById(id) {
    const user = await models.user.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    return user;
   }
}

module.exports = userService;