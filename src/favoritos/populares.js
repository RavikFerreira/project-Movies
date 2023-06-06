import React, { useEffect, useState } from "react";
import "../home/home.css";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import FilmesCard from "../components/FilmeCard/FilmeCard";

export default function Populares(){

    const [FilmesP, setFilmesP] = useState([]);


    useEffect(() => {

    const fetchFilmesP = async () => {
        try{
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular',
            {
                params: {
                    api_key: "05f8482d5927ec34379002150b1c52c7",
                },
            });
            setFilmesP(response.data.results);
        }
        catch (error){
            console.error(error)
        }
    };
    fetchFilmesP();
    
    },[]);
            
    return(

        <div className="backhome">
            <NavBar />
                <h2 className="title">Filmes Populares:</h2> 
                <div className="filmes_container">
                {FilmesP.length === 0 && <p>Carregando...</p>}
                {FilmesP.length > 0 && FilmesP.map((filme) => 
                <FilmesCard key={filme.id} filme={filme}/>
                )}

                
            </div>
        </div>
    );
};