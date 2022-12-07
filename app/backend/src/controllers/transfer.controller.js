const transferService = require('../services/transfer.service');

const transferController = {
  async create(req, res) { 
    const validate = transferService.validateBody(req.body);
    const transfer = await transferService.create(validate);
    res.status(201).json(transfer);
  },

  async getAll(req, res) { 
    const transfers = await transferService.getAll();
    res.status(200).json(transfers);
  },

  async getById(req, res) { 
    const { id } = req.params;
    const transfer = await transferService.getById(id);
    res.status(200).json(transfer);
  },

  async update(req, res) {
    const { id } = req.params;
    const validate = transferService.validateBody(req.body);
    const transfer = await transferService.update(id, validate);
    res.status(200).json(transfer);
   },

  async delete(req, res) {
    const { id } = req.params;
    await transferService.delete(id);
    res.status(204).json({ message: 'Transfer deleted' });
   },
};

module.exports = transferController;