import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar';
import '../home/home';
import FilmesCard from '../components/FilmeCard/FilmeCard';
import { useParams } from 'react-router-dom';


export default function Favoritos(){
    const {id} = useParams();
    const [filmesF, setFilmesF] = useState([]);

useEffect(() => {
    const fetchFilmesF = async () => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?`,{
                params: {
                    api_key: "05f8482d5927ec34379002150b1c52c7",
                },
            });
            setFilmesF(response.data.results);
        }
        catch (error){
            console.error(error)
        }
    fetchFilmesF();
    }
    },[]);

    return (
        <div>
            <NavBar/>
            <div className="filmes_container">
                <h3 className='title'>Meus Filmes Favoritos</h3>
                {filmesF.length === 0 && <p>Nenhum filme favorito encontrado.</p>}
                {filmesF.length && filmesF.map((filme) => (
                <FilmesCard key={filme.id} filme={filme}/>
                ))}
            </div>
        </div>
        );
    }
    


