const router = require('express').Router();
const customerController = require('../controllers/customer');

// Routes of Web Service
// Customer
router.post('/', customerController.create);
router.get('/id/:id', customerController.findOne);
router.get('/', customerController.findAll);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);
router.delete('/', customerController.deleteAll);

module.exports = router;
