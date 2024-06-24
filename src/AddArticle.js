import React, { useState} from "react";



function AddArticle({addArticle}) {
    const [topic, setTopic] = useState("Travel");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState("");

const createArticle = (event) => {
    event.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    const newArticle = {
        id: id,
        topic: topic,
        title: title,
        content: {
            paragraph1: content,
            paragraph2: ''
        },
        author: author,
        date: date
   };

   addArticle(newArticle);
    setTopic("Travel");
    setTitle("");
    setContent("");
    setDate("");
    setAuthor("");
};

    return (
    <>
    <div className="create-article">
            <form onSubmit={createArticle}>
                <label>Select article topic</label>
                <br />
                <select id='topics' value={topic} onChange={(e) => setTopic(e.target.value)} required>
                    <option>Travel</option>
                    <option>Cooking</option>
                    <option>Life-hacks</option>
                    <option>Animals</option>
                    <option>Nature</option>
                    <option>Hobby</option>
                </select>
                <br />
                <input type='text' placeholder="add article titel.." value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                <br />
                <textarea name='article-text' placeholder="add your article here.." value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <br />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required></input>
                <br />
                <input type="text" placeholder="add your name.." value={author} onChange={(e) => setAuthor(e.target.value)} required></input>
                <br />
                <button type="submit">Publish</button>
            </form>
    </div>
    </>
    )
}

export default AddArticle;