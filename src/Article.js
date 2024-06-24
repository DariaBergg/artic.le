import './App.css';
import React, { useState } from 'react';
import ArticleEdit from './ArticleEdit';


const Article = ({ id, title, topic, author, date, content, onClick, onDelete, onEdit}) => {
  const truncatedContent = (content.paragraph1) ?  content.paragraph1 + '...' : '';
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(id); // Передаем ID статьи, которую нужно удалить
  };

  // const handleEdit = () => {
  //   setIsEditing(true);
  //   onEdit(id);
  // }
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="article" onClick={() => onClick(id)}>
      {isEditing ? (
        <ArticleEdit
        article={{id, title, content}}
        onCancel={handleCancelEdit}
        />
      ) : (
        <>
    <h2>{title}</h2>
    <div className='article-ul'>
      <ul>
      <li>#{topic}</li>
      <li>{author}</li>
      <li>{date}</li>
      </ul>
    </div>
    <p>{truncatedContent}</p>
    {/* <button className='edit-article-btn' onClick={handleEdit}>edit</button> */}
    <button className='delete-article-btn' onClick={handleDelete}>delete</button>
    </>
      )}
    </div>
  );
};

export default Article;

