import { useState, useEffect } from "react"
import ArticlesList from './ArticlesList'

const Home = () => {
    const [articles, setArticles] = useState(null)

    const handleDelete = (id) => {
        const updatedArticles = articles.filter(item => item.id !== id);
        setArticles(updatedArticles);
    }

    useEffect(() => {
        fetch('http://localhost:8800/articles')
        .then(response => response.json())
        .then(data => setArticles(data))
    }, [])

    return (
        <div className="home">
           {articles && <ArticlesList articles={articles} handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home