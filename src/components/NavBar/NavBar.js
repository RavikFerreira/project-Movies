import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="NavBar">
            <p><Link to='/filmes'>ReelsReview</Link></p>
            <form>
                <input type="text" placeholder="Procurar filme"/>
                <button type="submit">Buscar</button>
            </form>
            <Link id="sair"to='/'><b>Sair</b></Link>
        </nav>
    );
}