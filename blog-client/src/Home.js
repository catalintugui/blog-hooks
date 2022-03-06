import { useState, useEffect } from "react"
import ArticlesList from './ArticlesList'

const Home = () => {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id) => {
        const updatedArticles = articles.filter(item => item.id !== id);
        setArticles(updatedArticles);
    }

    useEffect(() => {
        fetch('http://localhost:8800/articles')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setArticles(data);
            setIsLoading(false);
        })
    }, [])

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {articles && <ArticlesList articles={articles} handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home