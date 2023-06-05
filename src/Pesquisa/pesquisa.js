import React, { useState } from 'react';
import axios from 'axios';

export default function Pesquisa ({ onSearchResults }) {
  const [pesquisaTerm, setPesquisaTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: "05f8482d5927ec34379002150b1c52c7",
            query: searchTerm,
          },
        }
      );
      onSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

}