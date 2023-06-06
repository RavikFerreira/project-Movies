import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from './Login/login'
import NavBar from './components/NavBar/NavBar';
import Cadastro from './cadastro/cadastro';
import Filme from './filme/filme';
import Home from './home/home';
import Pesquisa from './Pesquisa/pesquisa';
import Populares from './populares/populares';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/filmes" element={<Home />} />
      <Route path='/filmes' element={<NavBar />} />
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/filmes' element={<Cadastro/>}/>
      <Route path="filme/:id" element={<Filme />} />
      <Route path='/pesquisa' element={<Pesquisa/>}/>
      <Route path='/populares' element={<Populares/>}/>
      <Route path='/*' element={<Login />}/>
    </Routes>
    
)};

export default App;