import { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Nav from './components/Nav';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <h1>Beers and so More</h1>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/beers" element={<Beers />}/>
        </Routes>
    </div>
    </Router>
  )
};

export default App;
