const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/UserController')

router.post('/user', UserController.registerUser)

module.exports = router;
