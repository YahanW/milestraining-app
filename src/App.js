import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MUITricks from './Component/MUITricks';
import MUIAppBar from './Component/AppBar';
import Tricks from './Component/Tricks';
import LuckyWheel from './Component/WhatsForLunch';



function App() {

  return (
    <Router>
    <div className="App">
      <header>
        <MUIAppBar />
      </header>
     
        <Routes>
          <Route path='/WhatsForLunch' element={<LuckyWheel />} />
          <Route path='/MUITricks' element={<MUITricks />} />
          <Route path='/tricks' element={<Tricks />} />
          <Route path='/' element={<Home />} />
        </Routes>
        
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to Dog Tricks</h2>
    <p>Explore the tricks that your dog can learn and has already learned.</p>
  </div>
);

export default App;
