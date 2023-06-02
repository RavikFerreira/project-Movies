import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="NavBar">
            <p><Link id="pnav" to='/home'>ReelsReview</Link></p>
            <form>
                <input id='buscar' type="text" placeholder="Procurar filme"/>
                <button id="buscarB" type="submit">Buscar</button>
            </form>
            <button id="sair"><b>Sair</b></button>
        </nav>
    );
}