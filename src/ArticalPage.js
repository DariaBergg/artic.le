import React from "react";
import './App.css';
// import articlesData from "./articlesData";

const ArticlePage = ({ id, articles }) => {
    const article = articles.find(article => article.id === id);
  
    if (!article) {
      return <div>Статья не найдена</div>;
    }
  
    const { title, topic, author, date, content } = article;
  
    return (
        <>
        <div className="article">
          <h2>{title}</h2>
        <div className='article-ul'>
          <ul>
          <li>#{topic}</li>
          <li>{author}</li>
          <li>{date}</li>
          </ul>
        </div>
          <p>{content.paragraph1}</p>
          <p>{content.paragraph2}</p>
        </div>
        </>
      );
  };
  
  export default ArticlePage;