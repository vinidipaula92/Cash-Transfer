const userService = require('../services/user.service');

const userController = {
  async create(req, res) {
    const validate = userService.validateBody(req.body);
    const user = await userService.create(validate);
    res.status(201).json(user);
  },

  async getAll(req, res) { 
    const users = await userService.getAll();
    res.status(200).json(users);
  },

  async getById(req, res) { 
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  },
};

module.exports = userController;