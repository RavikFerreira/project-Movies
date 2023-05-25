import React from 'react';
import './login.css';

export default function login() {
return (
    <div className="login">
        <h2>Fazer login</h2>
        <p>Olá, bem-vindo ao ReelsReview!</p>
        <input class="input" type='text' placeholder='Email' required="required"></input>
        <br/>
        <input class="input" id="senha" type='password' placeholder='Senha' required="required"></input>
        <br/>
        <button id='botao'>Login</button>
    </div>
);
}






