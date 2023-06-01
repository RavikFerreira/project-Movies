import React from "react";

export default function Cadastro(){
    return(
        <div className="cadastro">
            <input id="email" type='text' placeholder='Email' required="required"></input>
            <input id="senha" type='password' placeholder='Senha' required="required"></input>
        </div>
        
    );
}