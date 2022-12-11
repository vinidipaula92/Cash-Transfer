const accountService = require('../services/account.service');

const accountController = {
  async getById(req, res) {
    const { id } = req.params;
    const account = await accountService.getById(id);
    res.status(200).json(account);
  },
};

module.exports = accountController;