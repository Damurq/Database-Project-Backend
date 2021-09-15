const router = require('express').Router();
const municipalityController = require('../controllers/municipality');

// Routes of Web Service
// Municipality
router.post('/', municipalityController.create);
router.get('/id/:id', municipalityController.findOne);
router.get('/stateId/:stateId', municipalityController.findByState);
router.get('/', municipalityController.findAll);
router.put('/:id', municipalityController.update);
router.delete('/:id', municipalityController.delete);
router.delete('/', municipalityController.deleteAll);

module.exports = router;
