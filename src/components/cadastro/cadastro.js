import React from "react";
import './cadastro.css';

export default function Cadastro(){
    return(
        <div className="backcadastro">
            <div className="cadastro">
                <h2>Fazer login</h2>
                <p>Olá, bem-vindo ao ReelsReview!</p>
                
                <input id="nome" type='text' placeholder='Nome' required="required"></input>
                <input id="sobrenome" type='text' placeholder='Sobrenome' required="required"></input>
                <input id="email" type='text' placeholder='Email' required="required"></input>
                <input id="confirmarEmail" type='text' placeholder='Confirmar email' required="required"></input>
                <input id="senha" type='password' placeholder='Senha' required="required"></input>
                
                <button id='botao'>Login</button><br/>
            </div>
            
        </div>
        
    );
}