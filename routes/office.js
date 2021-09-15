const router = require('express').Router();
const officeController = require('../controllers/office');

// Routes of Web Service
// Office
router.post('/', officeController.create);
router.get('/id/:id', officeController.findOne);
router.get('/municipalityId/:municipalityId', officeController.findByMunicipality);
router.get('/', officeController.findAll);
router.put('/:id', officeController.update);
router.delete('/:id', officeController.delete);
router.delete('/', officeController.deleteAll);

module.exports = router;
