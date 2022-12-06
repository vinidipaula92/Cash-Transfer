const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

router.get('/', userController.getAll);
router.post('/', userController.login);
router.post('/create', userController.create);
router.get('/:id', userController.getById);

module.exports = router;