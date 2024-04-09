// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
