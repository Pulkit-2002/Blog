// src/components/Article.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        axios.get(`/api/articles/${id}`)
            .then(response => setArticle(response.data))
            .catch(error => console.error('Error fetching article:', error));
    }, [id]);

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            {/* Add comments section here */}
        </div>
    );
}

export default Article;
