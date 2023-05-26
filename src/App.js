import React from 'react';
import './App.css';
import Login from './components/Login/login';
import reelsreview from './imagens/reelsreview.png'

function App() {
  return (
    <div className="App">
      
      <img className='logo' src={reelsreview}></img>
      <h2 className='texto'>SEU SITE DE RESENHA DE FILMES</h2>
      <Login/>
    </div>
    
)};

export default App;