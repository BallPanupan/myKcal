const express = require('express');
const { register, login, profile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const logger = require('../middleware/logger');

const router = express.Router();

router.use(logger);

router.post('/register', register);

router.post('/login', login);

router.get('/profile', authMiddleware, profile);

module.exports = router;
