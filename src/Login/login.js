import React, {useState} from 'react';
import './login.css';
import {useNavigate, Link}  from 'react-router-dom';


export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (user && password) {
          navigate("/filmes");
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      };

    return (
    <div className="back">
        <div className='login'>
            <h2 id='texto'>Fazer login</h2>
            <p id='p'>Olá, bem-vindo ao ReelsReview!</p>
            <div className='emailesenha'>
                <input id="email" type="email" placeholder="Digite seu e-mail" value={user} onChange={(e) => setUser(e.target.value)}/>
                <input id="senha" type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button  id='botao' onClick={handleLogin}>Entrar</button><br/>
    
            <p id='p2'>Não tem conta? {<Link to='/cadastro' id='link'>Criar conta.</Link>}</p>
            
        </div>
    </div>
    );
}
