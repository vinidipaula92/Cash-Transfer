const { Router } = require('express');
const accountController = require('../controllers/account.controller');

const router = Router();

router.get('/:id', accountController.getById);

module.exports = router;