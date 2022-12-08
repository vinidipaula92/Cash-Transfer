const { Router } = require('express');
const transferController = require('../controllers/transfer.controller');

const router = Router();

router.post('/', transferController.create);
router.get('/', transferController.getAll);
router.get('/:id', transferController.getById);

module.exports = router;