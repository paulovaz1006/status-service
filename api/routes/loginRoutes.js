const { Router } = require('express');
const UserController = require('../controllers/UserController');
const router = Router();
const passport = require('passport');

router.post('/login', 
    passport.authenticate('local', { session:false }), 
    UserController.login)

module.exports = router;