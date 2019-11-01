import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navigation />
       <Hero />
       <Footer />
    </div>
  );
}

export default App;
