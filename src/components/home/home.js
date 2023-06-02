import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "./NavBar";

export default function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`)
        .then(response => response.json())
        .then( data => {
            setFilmes(data.results);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);
            
    return(
        <div className="backhome">
            <NavBar/>
            <h1 id="textoH">Melhores Filmes: </h1>
            <ul id="tela">
                {filmes ? (
                    filmes.map(filme => (
                        <li key={filme.id}>{filme.title}</li>
                    ))
                ):(
                    <li>Loading....</li>
                )}
            </ul>
        </div>
    );
}