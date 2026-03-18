import React from 'react';
import Header from './Components/Layout/Header';
import './App.css';
import Footer from './Components/Layout/Footer';
import './index.css';
import Home from './Pages/home';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />  
      <Footer />
    </div>
  );
}

export default App;



