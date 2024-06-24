import React from "react";

function Header({openAddArticle, handleTopicClick, searchTerm, onSearch }){
  
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

return (
    <>
    <header className="header">
       <div className='articles-nav'>
       <a href='.'><h1>Artic.le</h1></a>
       <h4>Add own article or</h4>
       <form className='search'>
        <input type='search' 
        placeholder='search article...'
        value={searchTerm}
        onChange={handleSearchChange}
        ></input>
        <button>Search</button>
       </form>
       </div>
       <div className='profile-and-dropdown'>
       <div className='addArticle-btn'>
       <button onClick={openAddArticle}>Add Article</button>
      </div>
       <div className="dropdown">
        <button className="dropbtn">Topics</button>
        <div className="dropdown-content">
          <a href="." onClick={() => handleTopicClick('All')}>All</a>
          <a href="#"onClick={() => handleTopicClick('Travel')}>Travel</a>
          <a href="#" onClick={() => handleTopicClick('Cooking')}>Cooking</a>
          <a href="#" onClick={() => handleTopicClick('Life-hacks')}>Life-hacks</a>
          <a href="#" onClick={() => handleTopicClick('Animals')}>Animals</a>
          <a href="#" onClick={() => handleTopicClick('Nature')}>Nature</a>
          <a href="#" onClick={() => handleTopicClick('Hobby')}>Hobby</a>
        </div>
      </div>
      </div>
      </header>
      </>
)
}

export default Header;