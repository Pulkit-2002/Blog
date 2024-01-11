// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('/api/articles')
            .then(response => setArticles(response.data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <h1>Your Blog</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <a href={`/article/${article.id}`}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
