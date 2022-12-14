const Joi = require('joi');
const { sequelize } = require('../database/models');
const models = require('../database/models');

const userService = {
  validateBody(unknown) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      cpf: Joi.string().min(11).required(),
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

  async userExists(cpf) {
    const user = await models.user.findOne({ where: { cpf } });
    if (!user) {
      const error = new Error('User not found');
      error.code = 404;
      throw error;
    }
    return user;
  },

  async passwordMatches(cpf, password) {
    const user = await models.user.findOne({ where: { cpf, password } });
    if (!user) {
      const error = new Error('Credentials not found');
      error.code = 401;
      throw error;
    }
    return user;
  },

  async create(user) {
    const t = await sequelize.transaction();
    const { cpf } = user;
    const userExists = await models.user.findOne({
      where: { cpf },
    });
    if (userExists) {
      const error = new Error('User already exists');
      error.code = 409;
      throw error;
    }
    const createAccountId = await models.account.create({ balance: 1000 }, { transaction: t });
    const createUserId = await models.user.create({ ...user, accountId: createAccountId.id }, { transaction: t });
    await t.commit();
    const { id, password, ...userWithoutPassword } = createUserId.dataValues;
    return { ...userWithoutPassword, balance: createAccountId.balance };
  },

  async getAll() { 
    const users = await models.user.findAll({
      attributes: { exclude: ['password', 'id'] },
    });
    return users;
  },

  async getById(id) {
    const user = await models.user.findByPk(id, {
      attributes: { exclude: ['password', 'id'] },
      include: [
        {
          model: models.account,
          as: 'userInfo',
          attributes: ['balance'],
        },
      ],
    });
    return user;
  },
  
  async login(user) {
    const { cpf, password } = user;
    const userLogin = await models.user.findOne({
      where: { cpf },
    });
    const userBalance = await models.account.findOne({
      where: { id: userLogin.accountId },
    });
    const { id, password: except, ...userWithoutPassword } = userLogin.dataValues;
    return { ...userWithoutPassword, balance: userBalance.balance };
   },
}

module.exports = userService;