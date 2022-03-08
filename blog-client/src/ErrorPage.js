import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404. Not found</p>
            <Link to='/'><button>Go to homepage...</button></Link>
        </div>
        
    )
}
export default ErrorPage

