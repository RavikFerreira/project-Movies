import React from "react";
import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function NavBar(){
    
    const [pesquisa, setPesquisa] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!pesquisa) return
        navigate(`/pesquisa?q=${pesquisa}`);
        setPesquisa("");
    };

    return(
        <nav className="NavBar">
            <p><Link to='/filmes'>ReelsReview</Link></p>
            <p><Link id="populares" to='/populares'>Filmes Populares</Link></p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Procurar filme" 
                onChange={(e) => setPesquisa(e.target.value)}
                value={pesquisa}/>
                <button type="submit">Buscar</button>
            </form>
            <Link id="sair"to='/'><b>Sair</b></Link>
        </nav>
    );
}