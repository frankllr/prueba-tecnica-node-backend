const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definir las rutas y asociarlas a los controladores
router.get('/', userController.getUsers);
router.post('/', userController.createUser)

module.exports = router;