import React, { useState, useEffect } from "react";
import axios from 'axios';
import NewsItem from "./NewsItem";
import "./NewsList.css"

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=football&apiKey=75aee15d7fea48038aee8d5dd15f8657')
            console.log(response)
            setArticles(response.data.articles)
    }
     getArticles();
    }, [])

    return (
        <div className="return">
            {articles.map(article => {
                return (
                <NewsItem 
                title = {article.title}
                description = {article.description}
                url = {article.url}
                urlToImage = {article.urlToImage}
                />
                )
            })}
        </div>
    )
}


export default NewsList;