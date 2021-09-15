const router = require('express').Router();
const voucherController = require('../controllers/voucher');

// Routes of Web Service
// Voucher
router.post('/', voucherController.create);
router.get('/id/:id', voucherController.findOne);
router.get('/', voucherController.findAll);
router.put('/:id', voucherController.update);
router.delete('/:id', voucherController.delete);
router.delete('/', voucherController.deleteAll);

module.exports = router;
