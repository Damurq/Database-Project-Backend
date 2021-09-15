const router = require('express').Router();
const accountController = require('../controllers/account');

// Routes of Web Service
// Account
router.post('/', accountController.create);
router.get('/id/:id', accountController.findOne);
router.get('/', accountController.findAll);
router.put('/:id', accountController.update);
router.delete('/:id', accountController.delete);
router.delete('/', accountController.deleteAll);

module.exports = router;
