import React from 'react';
import './login.css';

export default function login() {
return (
    <div className="back">
        <h2>Fazer login</h2>
        <p>Olá, bem-vindo ao ReelsReview!</p>
        
        <div className='login'>
            <input id="email" type='text' placeholder='Email' required="required"></input>
            <input id="senha" type='password' placeholder='Senha' required="required"></input>
            <button id='botao'>Login</button><br/>
            <p>Não tem conta?<a href=''> Criar conta.</a></p>
        </div>
    </div>
);
}