// routes/articles.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const Article = require('../models/article');

router.get('/protected', authenticateToken, (req, res) => {
    // Only accessible with a valid token
    res.json({ message: 'This is a protected route' });
});

// We can add more protected routes as needed

module.exports = router;
