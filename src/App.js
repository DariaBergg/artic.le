import './App.css';
import './AppMobile.css';
import React, { useState, useEffect } from 'react';
import Article from './Article';
// import articlesData from './articlesData';
import ArticlePage from './ArticalPage';
// import Profile from './Profile';
import AddArticle from './AddArticle';
import Header from './Header';
import ArticleEdit from './ArticleEdit';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [currentContent, setCurrentContent] = useState('articles');
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles'));
    setArticles(storedArticles);
  }, []);


  const handleArticleClick = (id) => {
    setSelectedArticle(id);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  //to open a addArticle tab
  const openAddArticle = () => {
    setCurrentContent('addArticle');
  };

  const addArticle = (newArticle) => {
    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    setCurrentContent('articles'); // Переключиться обратно на отображение статей после добавления новой статьи
  };

  const handleDeleteArticle = (id) => {
    const updatedArticles = articles.filter(article => article.id !== id);
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    if (selectedArticle === id) {
      setSelectedArticle(null);
    }
  };
  
  const handleEditArticle = (id) => {
    setEditingArticle(id);
    setCurrentContent('article-edit');
  }

  const handleSaveEdit = (editedArticle)=>{
    // Обновление статьи с отредактированными данными
  const updatedArticles = articles.map(article => {
    if (article.id === editingArticle) {
      return editedArticle;
    }
    return article;
  });
  setArticles(updatedArticles);
  localStorage.setItem('articles', JSON.stringify(updatedArticles));
  setCurrentContent('articles'); // Возврат к списку статей после сохранения изменений
  }

  const handleCancelEdit = () => {
    setCurrentContent('articles'); // Возврат к списку статей
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredArticles = selectedTopic === 'All' ?
  articles : articles.filter(article => article.topic.toLowerCase() ===
  selectedTopic.toLowerCase());

  const searchedArticles = filteredArticles.filter(article => 
    (article.title && article.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (article.content && typeof article.content === 'string' && article.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="Homepage">
       {/* Шапка с возможностью добавления статьи, выбора темы и поиска */}
      <Header
      openAddArticle={openAddArticle}
      handleTopicClick={handleTopicClick}
      onSearch={handleSearch}
      />
      <div className="content">
         {/* Отображение списка статей или компонента добавления/редактирования */}
        {currentContent === 'articles' && (
        <div className='articles'>
        {selectedArticle ? (
            // Отображение страницы конкретной статьи
          <ArticlePage id={selectedArticle} articles={articles}/>
        ) : (
          // Отображение списка статей
          (searchTerm.trim() !== '' ? (
            searchedArticles.length > 0 ? (
            searchedArticles.map(article => (
          <Article 
          key={article.id}
          id={article.id}
          title={article.title} 
          topic={article.topic} 
          author={article.author} 
          date={article.date} 
          content={article.content} 
          onClick={() => handleArticleClick(article.id)}
          onDelete={handleDeleteArticle}
          onEdit={handleEditArticle}  
          />
        ))
      ) : (
        <>
        <p>Article doesn't exist :(</p>
        <button onClick={openAddArticle}>Add Article</button>
        </>
      )
    ) : (
      filteredArticles.length > 0 ? (
      filteredArticles.map(article => (
        <Article 
          key={article.id}
          id={article.id}
          title={article.title} 
          topic={article.topic} 
          author={article.author} 
          date={article.date} 
          content={article.content} 
          onClick={() => handleArticleClick(article.id)}
          onDelete={handleDeleteArticle}
          onEdit={handleEditArticle}
          />
    ))
  ) : (
    <>
    <p>This topic is empty now :(</p>
    <button onClick={openAddArticle}>Add Article</button>
    </>
  )
  ))
      )}
      </div>
        )}
        {/* Отображение формы добавления статьи */}
        {currentContent === 'addArticle' && <AddArticle  addArticle={addArticle}/>}

        {/* Отображение формы редактирования статьи */}
        {currentContent === 'article-edit' && <ArticleEdit  onCancel={handleCancelEdit} onSave={handleSaveEdit}/>}
      </div>
    </div>
  );
}

export default App;
