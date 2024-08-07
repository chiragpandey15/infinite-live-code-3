const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const stockController = require("../controllers/stockController");

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/stocks', authMiddleware,stockController.stocks);
router.post('/stocks/buy', authMiddleware,stockController.stocksBuy);
router.post('/stocks/sell', authMiddleware,stockController.stocksSell);
router.get('/api/transactions',authMiddleware ,stockController.transactions);

module.exports = router;
