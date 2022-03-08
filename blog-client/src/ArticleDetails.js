import { useParams, useNavigate } from "react-router-dom"
import useFetch from "./useFetch";

const ArticleDetails = () => {
    const {id} = useParams();
    const {data: article, error, isLoading} = useFetch('http://localhost:8800/articles/' + id);
    const navigate = useNavigate();
    
    const handleDelete = () => {
        fetch('http://localhost:8800/articles/' + article.id, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/')
        })
    }    
    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <article>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                    <div>{article.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    )
}

export default ArticleDetails