import React from 'react';
import Hero from './components/Hero';
import "./styles/tailwind.css";  
import CardsList from './components/CardsList';
import Footer from './components/Footer';

function App() { 
  return (
    <div className="App bg-gray-300" >
      <Hero />  
      <CardsList />
      <Footer />
    </div>
  );
}

export default App;
