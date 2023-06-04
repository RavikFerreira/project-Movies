import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function login() {
    return (
    <div className="back">
        
        <div className='login'>
            <h2 id='texto'>Fazer login</h2>
            <p id='p'>Olá, bem-vindo ao ReelsReview!</p>
            <div className='emailesenha'>
                <input id="email" type='text' placeholder='Digite seu e-mail' required="required"></input>
                <input id="senha" type='password' placeholder='Digite sua senha' required="required"></input>
            </div>
            <button id='botao'><Link to='/filmes'>Login</Link></button><br/>
            <p id='p2'>Não tem conta? <Link to='/cadastro'>Criar conta.</Link></p>
            
        </div>
    </div>
    );
}
