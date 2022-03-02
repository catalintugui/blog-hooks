import { useState } from "react"
import ArticlesList from './ArticlesList'

const Home = () => {
    const [articles, setArticles] = useState([
        {title: 'My new website', body: 'lorem ipsum dolor sit amet', author: 'catalin', id: 1},
        {title: 'My new website', body: 'lorem ipsum dolor sit amet', author: 'danut', id: 2},
        {title: 'My new website', body: 'lorem ipsum dolor sit amet', author: 'catalin', id: 3}
    ])

    const handleDelete = (id) => {
        const updatedArticles = articles.filter(item => item.id !== id);
        setArticles(updatedArticles);
    }
    return (
        <div className="home">
           <ArticlesList articles={articles} handleDelete={handleDelete}/>
        </div>
    )
}

export default Home