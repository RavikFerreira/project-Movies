import React from "react";
import "./filme.css";
import FilmesCard from "../components/FilmeCard/FilmeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function Filme() {
  const {id} = useParams();
  const [filme, setFilme] = useState(null);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const fetchFilme = async () => {
      try{
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,
          {
              params: {
                  api_key: "05f8482d5927ec34379002150b1c52c7",
              },
          });
          setFilme(response.data);
      }
      catch (error){
          console.error(error)
      }
    };
    fetchFilme();

    },[]);
    return ( 

    <div className="nav">
      <NavBar/>
      <div className="filme-page">
        {filme && (
        <>
        <FilmesCard filme={filme} showLink={false}/>
        <p className="tagline">{filme.tagline}</p>
        <div className="info">
          <h3>Orçament:</h3>
          <p>{formatCurrency(filme.budget)}</p>
        </div>
        <div className="info">
          <h3>Revenue: </h3>
          <p>{formatCurrency(filme.revenue)}</p>
        </div>
        <div className="info">
          <h3>Duration: </h3>
          <p>{filme.runtime} minutos</p>
        </div>
        <div className="infodescricao">
          <h3 id="descricao">Description: </h3>
          <p>{filme.overview}</p>
        </div>
        </>
        )}
      </div>
      </div>
  )};
  
  export default Filme;