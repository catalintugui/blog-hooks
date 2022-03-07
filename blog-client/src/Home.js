import { useState, useEffect } from "react"
import ArticlesList from './ArticlesList'

const Home = () => {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const updatedArticles = articles.filter(item => item.id !== id);
        setArticles(updatedArticles);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8800/articles')
            .then(response => {
                if(!response.ok){
                    throw Error('could not fetch the data')
                }
                return response.json()
            })
            .then(data => {
                setArticles(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {articles && <ArticlesList articles={articles} handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home