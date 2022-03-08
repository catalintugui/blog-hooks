const ArticlesList = ({articles}) => {

    return(
        <div className="blog-list">
            {articles.map(item => 
               <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written by {item.author}</p>
               </div>
           )}
        </div>
    )
}

export default ArticlesList