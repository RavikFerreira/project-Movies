import React from "react";
import {FaStar} from "react-icons/fa";
import { Link  } from "react-router-dom";

export default function FilmesCard({ filme, showLink = true }){
    return(
        <div>
        <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
        <h2>{filme.title}</h2>
        <p><FaStar /> {filme.vote_average}<br/><br/>
        {showLink && <Link to={`/filme/${filme.id}`}>Detalhes</Link>}
        
        </p> 
    </div>
    );
};