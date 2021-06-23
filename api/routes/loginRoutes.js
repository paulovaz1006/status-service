const { Router } = require('express');
const LoginController = require('../controllers/LoginController');
const loginController = new LoginController();
const router = Router();
const passport = require('passport');

router.post('/login', 
    passport.authenticate('local', { session:false }), 
    loginController.login)

module.exports = router;