import React from 'react';
import './App.css';
import Login from './components/Login/login';
import reelsreview from './imagens/reelsreview.png'

function App() {
  return (
    <div className="App">
      
      <img className='logo' src={reelsreview}></img>
      <p className='texto'> <b>SEU SITE DE RESENHA DE FILMES</b></p>
      <Login/>
    </div>
    
)};

export default App;