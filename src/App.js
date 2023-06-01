import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login/login";
import Cadastro from "./components/cadastro/cadastro"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/cadastro' element={<Cadastro/>}/>


    </Routes>
    
)};

export default App;