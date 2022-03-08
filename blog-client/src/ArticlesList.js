import { Link } from "react-router-dom"

const ArticlesList = ({articles}) => {

    return(
        <div className="blog-list">
            {articles.map(item => 
               <div className="blog-preview" key={item.id}>
                    <Link to={`/articles/${item.id}`}>
                        <h2>{item.title}</h2>
                        <p>Written by {item.author}</p>
                    </Link>     
               </div>
           )}
        </div>
    )
}

export default ArticlesList