import React, { useState } from 'react';
import ArticleEdit from './ArticleEdit';

const EditArticlePage = ({ article, onSave, onCancel }) => {
  const [editedArticle, setEditedArticle] = useState(article);

  // Обработчик изменений в форме
  const handleSave = (editedArticle) => {
     // Найдите индекс редактируемой статьи в массиве статей
  const index = articles.findIndex(article => article.id === editingArticle);
  if (index !== -1) {
    // Обновите редактируемую статью в массиве статей
    const updatedArticles = [...articles];
    updatedArticles[index] = editedArticle;
    setArticles(updatedArticles);
    // Сохраните обновленные статьи в localStorage
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    // Вернитесь к просмотру статей
    setCurrentContent('articles');
    setEditingArticle(null); // Сбросьте состояние редактируемой статьи
  }
  };

  // Обработчик отмены редактирования
  const handleCancel = () => {
    onCancel(); // Просто вызываем обработчик отмены
  };

  return (
    <div className="edit-article-page">
      <h1>Edit Article</h1>
      <ArticleEdit
        article={editedArticle}
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </div>
  );
};

export default EditArticlePage;
