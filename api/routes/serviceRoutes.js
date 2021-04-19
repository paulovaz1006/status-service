const { Router } = require('express');
const router = Router();
const ServiceController = require('../controllers/ServiceController');

router.post('/service', ServiceController.registerService)
router.patch('/service/:id', ServiceController.updateService)

module.exports = router;