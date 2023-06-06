import React, {useState} from "react";
import './cadastro.css';
import {Link, useNavigate} from "react-router-dom";

export default function Cadastro(){
    const [user, setUser] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [email, setEmail] = useState("");
    const [emailc, setEmailc] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleCadastro = () => {
        if (user && sobreNome && email && emailc && password) {
          if(email === emailc){
            navigate("/filmes");
          }else{
            alert("Os e-mails não coincidem!.");
          }
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      };

    return(
        <div className="backcadastro">
            <div className="cadastro">
                <h2 id="tituloc">Criar conta</h2>
                <h4 id="pc">Preencha os campos com seus dados:</h4>
                <div className="nomesobrenome">
                    <input id="nome" type='text' placeholder='Nome' value={user} onChange={(e) => setUser(e.target.value)}/>
                    <input id="sobrenome" type='text' placeholder='Sobrenome' value={sobreNome} onChange={(e) => setSobreNome(e.target.value)}/>
                </div>
                <input id="emailc" type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input id="confirmarEmail" type='text' placeholder='Confirmar email' value={emailc} onChange={(e) => setEmailc(e.target.value)}/>
                <input id="senhac" type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button id='cadastrar' onClick={handleCadastro}>Cadastrar</button><br/>
                <p id='pc2'>Já tem conta? <Link to={"/"} id="link">Fazer login.</Link></p>
            </div>
        </div>
        
    );
}