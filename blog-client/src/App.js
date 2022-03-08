import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import ArticleDetails from './ArticleDetails';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from './ErrorPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/articles/:id' element={<ArticleDetails />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
