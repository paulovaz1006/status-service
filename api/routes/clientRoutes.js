const { Router } = require('express');
const router = Router();
const passport = require('passport');
const ClientController = require('../controllers/ClientController');
const middlewareAuthenticate = require('../utils/authentication/middleware-authenticate');
const clientController = new ClientController();

router.post('/client', 
    middlewareAuthenticate.local, 
    clientController.registerClient);
router.get('/client/:id', clientController.searchClient);

module.exports = router;