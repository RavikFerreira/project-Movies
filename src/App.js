import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from "./components/Login/login";
import Cadastro from "./components/cadastro/cadastro"
import Home from "./components/home/home";
import Pesquisa from './components/Pesquisa/pesquisa';
import Filme from './components/filme/filme';
import NavBar from './components/home/NavBar';

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