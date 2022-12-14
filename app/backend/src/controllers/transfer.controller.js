const transferService = require('../services/transfer.service');

const transferController = {
  async create(req, res) { 
    const validate = transferService.validateBody(req.body);
    const transfer = await transferService.create(validate);
    res.status(201).json(transfer);
  },

  async getAll(_req, res) { 
    const transfers = await transferService.getAll();
    res.status(200).json(transfers);
  },

  async getById(req, res) { 
    const { id } = req.params;
    const transfer = await transferService.getById(id);
    res.status(200).json(transfer);
  },
};

module.exports = transferController;