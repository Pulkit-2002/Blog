// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Sample data (replace with your database)
const articles = [
    { id: 1, title: 'Article 1', content: 'Content for Article 1.' },
    { id: 2, title: 'Article 2', content: 'Content for Article 2.' },
    // Add more articles as needed
];

app.use(bodyParser.json());

// API to get recent articles
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// API to get full article content by ID
app.get('/api/articles/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(a => a.id === articleId);
    if (article) {
        res.json(article);
    } else {
        res.status(404).json({ error: 'Article not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
