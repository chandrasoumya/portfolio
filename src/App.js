import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
