const router = require('express').Router();
const complementController = require('../controllers/complement');

// Routes of Web Service
// Complement
router.post('/', complementController.create);
router.get('/id/:id', complementController.findOne);
router.get('/', complementController.findAll);
router.put('/:id', complementController.update);
router.delete('/:id', complementController.delete);
router.delete('/', complementController.deleteAll);

module.exports = router;
