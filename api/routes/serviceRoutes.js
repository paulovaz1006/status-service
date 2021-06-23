const { Router } = require('express');
const router = Router();
const ServiceController = require('../controllers/ServiceController');
const serviceController = new ServiceController();

router.post('/service', serviceController.registerService)
router.patch('/service/:id', serviceController.updateService)

module.exports = router;