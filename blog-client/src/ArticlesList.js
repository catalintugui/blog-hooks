const ArticlesList = ({articles, handleDelete}) => {

    return(
        <div className="blog-list">
            {articles.map(item => 
               <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written by {item.author}</p>
                    <button onClick={() => handleDelete(item.id)}>delete article</button>
               </div>
           )}
        </div>
    )
}

export default ArticlesList