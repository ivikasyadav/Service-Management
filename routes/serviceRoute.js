const express = require('express');
const { addService, getAllServices, updateService, deleteService } = require('../controllers/serviceController');

const router = express.Router();

router.post('/services', addService);
router.get('/services', getAllServices);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

module.exports = router;
