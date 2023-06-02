import React from "react";
import './cadastro.css';
import { Link } from "react-router-dom";

export default function Cadastro(){
    return(
        <div className="backcadastro">
            <div className="cadastro">
                <h2 id="tituloc">Criar conta</h2>
                <p id="pc">Preencha os campos com seus dados:</p>
                
                <div className="nomesobrenome">
                    <input id="nome" type='text' placeholder='Nome' required="required"></input>
                    <input id="sobrenome" type='text' placeholder='Sobrenome' required="required"></input>
                </div>
                <input id="emailc" type='text' placeholder='Email' required="required"></input>
                <input id="confirmarEmail" type='text' placeholder='Confirmar email' required="required"></input>
                <input id="senhac" type='password' placeholder='Senha' required="required"></input>
                
                <button id='cadastrar'>Cadastrar</button><br/>
                <p id='pc2'>Já tem conta? <Link to={"/"}>Fazer login.</Link></p>
            </div>
            
        </div>
        
    );
}