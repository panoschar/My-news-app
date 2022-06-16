import React from "react";
import './NewsItem.css';

const NewsItem = ({ title, description, url, urlToImage}) => {
    return (
        <div className="news-app">
            <div className="news-item">
                <img className="news-image" src={urlToImage}/>
                <h3 className="news-header"><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>

        </div>
    )
}


export default NewsItem;