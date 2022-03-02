import { useState } from "react"
import ArticlesList from './ArticlesList'

const Home = () => {
    const [articles, setArticles] = useState([
        {title: 'My new website', body: 'lorem ipsum dolor sit amet', author: 'catalin', id: 1},
        {title: 'My new website', body: 'lorem ipsum dolor sit amet', author: 'danut', id: 2},
        {title: 'My new website', body: 'lorem ipsum dolor sit amet', author: 'catalin', id: 3}
    ])
    return (
        <div className="home">
           <ArticlesList articles={articles}/>
        </div>
    )
}

export default Home