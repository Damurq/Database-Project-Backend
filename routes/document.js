const router = require('express').Router();
const documentController = require('../controllers/document');

// Routes of Web Service
// Document
router.post('/', documentController.create);
router.get('/id/:id', documentController.findOne);
router.get('/number/:number', documentController.findByNumber);
router.get('/', documentController.findAll);
router.put('/:id', documentController.update);
router.delete('/:id', documentController.delete);
router.delete('/', documentController.deleteAll);

module.exports = router;
