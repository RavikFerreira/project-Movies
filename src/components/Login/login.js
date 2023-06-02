import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import reelsreview from '../imagens/reelsreview.png';

export default function login() {
return (
    
        
    <div className="back">
        <img className='logo' src={reelsreview}></img>
        <p className='texto'><b>SEU SITE DE RESENHA DE FILMES</b></p>
        
        <div className='login'>
            <h2 id='texto'>Fazer login</h2>
            <p id='p'>Olá, bem-vindo ao ReelsReview!</p>
            <input id="email" type='text' placeholder='Email' required="required"></input>
            <input id="senha" type='password' placeholder='Senha' required="required"></input>
            <button id='botao'>Login</button><br/>
            <p id='p2'>Não tem conta? <Link to='/cadastro'>Criar conta.</Link></p>
            
        </div>
    </div>
);
}