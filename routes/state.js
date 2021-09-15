const router = require('express').Router();
const stateController = require('../controllers/state');

// Routes of Web Service
// State
router.post('/', stateController.create);
router.get('/id/:id', stateController.findOne);
router.get('/', stateController.findAll);
router.put('/:id', stateController.update);
router.delete('/:id', stateController.delete);
router.delete('/', stateController.deleteAll);

module.exports = router;
