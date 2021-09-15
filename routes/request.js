const router = require('express').Router();
const requestController = require('../controllers/request');

// Routes of Web Service
// Request
router.post('/', requestController.create);
router.get('/id/:id', requestController.findOne);
router.get('/', requestController.findAll);
router.put('/:id', requestController.update);
router.delete('/:id', requestController.delete);
router.delete('/', requestController.deleteAll);

module.exports = router;
