import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import FilmesCard from "../components/FilmeCard/FilmeCard";

export default function Home(){

    const [melhoresFilmes, setMelhoresFilmes] = useState([]);


    useEffect(() => {

    const fetchFilmes = async () => {
        try{
            const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?',
            {
                params: {
                    api_key: "05f8482d5927ec34379002150b1c52c7",
                },
            });
            setMelhoresFilmes(response.data.results);
        }
        catch (error){
            console.error(error)
        }
    };
    fetchFilmes();
    
    },[]);
            
    return(

        <div className="backhome">
            <NavBar />
                <h2 className="title">Melhores Filmes:</h2> 
                <div className="filmes_container">
                {melhoresFilmes.length === 0 && <p>Carregando...</p>}
                {melhoresFilmes.length > 0 && melhoresFilmes.map((filme) => 
                <FilmesCard key={filme.id} filme={filme}/>
                )}

                
            </div>
        </div>
    );
};