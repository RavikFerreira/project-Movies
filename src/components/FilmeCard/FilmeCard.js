import React from "react";
import {FaStar} from "react-icons/fa";
import { Link  } from "react-router-dom";
import {AiFillHeart} from 'react-icons/ai';
import { useState } from "react";


export default function FilmesCard({ filme, showLink = true }){
    const [filmesF, setFilmesF] = useState([]);

    const adicionarAosFavoritos = (filme) => {
        setFilmesF([...filmesF, filme]);
};
    const removerDosFavoritos = (filme) => {
        const novosFilmesFavoritos = filmesF.filter(
        (fav) => fav.id !== filme.id
    );
    setFilmesF(novosFilmesFavoritos);
};

    const isFavorito = filmesF.some((fav) => fav.id === filme.id);

    const handleFavoritoClick = () => {
        if (isFavorito) {
        removerDosFavoritos(filme);
        } else {
        adicionarAosFavoritos(filme);
        }
    };
    return(

        <div>
        <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} /><h2>{filme.title}</h2><p>
            <FaStar /> {filme.vote_average}<br/><br/>
            {showLink && <Link to={`/filme/${filme.id}`}>Detalhes</Link>}
            <button onClick={handleFavoritoClick}>{isFavorito ? !<AiFillHeart/> : <AiFillHeart/> }</button>
        
        </p> 
    </div>
    );
};