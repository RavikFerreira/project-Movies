import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../home/home.css";
import { useLocation, useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import FilmesCard from '../components/FilmeCard/FilmeCard';
import { Location } from 'react-router-dom';


export default function Pesquisa() {

  const location = useLocation();
  const pesquisaParam = new URLSearchParams(location.search);
  const query= pesquisaParam.get("q");

  const [filmesP, setFilmesP] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {

    const fetchFilmesP = async () => {
  
      try {
          const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
              params: {
                api_key: `05f8482d5927ec34379002150b1c52c7`,
                query: query,
              },
            }
          );
          setFilmesP(response.data.results);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      }
    fetchFilmesP();
    },[query]);

  return(
    <div className="backhome">
        <NavBar />
            <h2 className="title">Resultados Para: <span className='query-text'>{query}</span></h2> 
            <div className="filmes_container">
            {isLoading && <p>Carregando...</p>}
            {!isLoading && filmesP.length === 0 && <p>Nenhum filme encontrado</p>}
            {!isLoading && filmesP.length > 0 && filmesP.map((filme) => 
            <FilmesCard key={filme.id} filme={filme}/>
            )}

            
        </div>
    </div>
);
};