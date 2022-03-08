import useFetch from './useFetch';
import ArticlesList from './ArticlesList'

const Home = () => {
   
    const {data: articles, isLoading, error} = useFetch('http://localhost:8800/articles');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {articles && <ArticlesList articles={articles} />}
        </div>
    )
}

export default Home