import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from './Login/login'
import NavBar from './components/NavBar/NavBar';
import Cadastro from './cadastro/cadastro';
import Home from './home/home';
import Pesquisa from './Pesquisa/pesquisa';
import Filme from './filme/filme';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Login />} />
      <Route path="/home" element={<NavBar />} />
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/login' element={<Home/>}/>
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="filme/:id" element={<Filme />} />
      

    </Routes>
    
)};

export default App;