const { Router } = require('express');
const router = Router();
const ClientController = require('../controllers/ClientController');

router.post('/client', ClientController.registerClient);
router.get('/client/:id', ClientController.searchClient);

module.exports = router;