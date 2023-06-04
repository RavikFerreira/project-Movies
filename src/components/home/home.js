import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "./NavBar";

const apiUrl = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

export default function Home(){
    const [melhoresFilmes, setMelhoresFilmes] = useState([]);

    const getMelhoresFilmes = async(url) => {
        const response =  await fetch(url);
        const dados = await response.json();
        console.log(dados);
        setMelhoresFilmes(dados.results);
    };

    useEffect(() => {

        const topRated = `${apiUrl}top_rated?${apiKey}`;
        console.log(topRated);
        getMelhoresFilmes(topRated);
     
    },[]);
            
    return(

        <div className="backhome">
            <NavBar />
            <div className="filmes_container">
                {melhoresFilmes && melhoresFilmes.map((filme) => <p>{filme.title}</p>)}
            </div>
        </div>
    );
};