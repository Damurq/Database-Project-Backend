const router = require('express').Router();
const foreignUseController = require('../controllers/foreignUse');

// Routes of Web Service
// ForeignUse
router.post('/', foreignUseController.create);
router.get('/id/:id', foreignUseController.findOne);
router.get('/', foreignUseController.findAll);
router.put('/:id', foreignUseController.update);
router.delete('/:id', foreignUseController.delete);
router.delete('/', foreignUseController.deleteAll);

module.exports = router;
