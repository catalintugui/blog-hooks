import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('catalin');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { title, content, author};

        setIsLoading(true);

        fetch('http://localhost:8800/articles', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(article)
        })
        .then(() => {
            setIsLoading(false);
            history('/');
        })

    }

    return (
        <div className="create">
            <h2>Add new article</h2>
            <form onSubmit={handleSubmit}>
                <label>Article title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Article content</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label>Article author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="catalin">catalin</option>
                    <option value="danut">danut</option>
                </select>
                {!isLoading && <button>Add article</button>}
                {isLoading && <button disabled>Adding article...</button>}
            </form>
        </div>
    )
}

export default Create