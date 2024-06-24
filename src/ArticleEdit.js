import React, {useState, useEffect} from "react";

const ArticleEdit = ({article, onCancel, onSave}) => {
const [editedArticle, setEditedArticle] = useState({title: "", content: ""});

useEffect(() => {
    // Установка начального значения editedArticle при изменении статьи
    if (article) {
      setEditedArticle(article);
    }
  }, [article]);
    const handleChange = (e) => {
        const {name, value } = e.target;
        setEditedArticle({...editedArticle, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedArticle);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={editedArticle.title} onChange={handleChange} />
        <textarea name="content" value={editedArticle.content} onChange={handleChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>X</button>
      </form>
    );
  };

export default ArticleEdit;