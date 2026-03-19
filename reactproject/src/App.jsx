import React from 'react';
import Header from './Components/Layout/Header';
import './App.css';
import Footer from './Components/Layout/Footer';
import './index.css';
import Home from './Pages/home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <Router>  
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;



