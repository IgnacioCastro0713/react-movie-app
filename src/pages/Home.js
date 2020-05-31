import React from 'react';
import useFetch from '../hooks/useFetch';
import {apiKeyMovieDb} from '../config/env';

export default function Home() {
  const movies = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyMovieDb}&language=es-ES&page=1`);

  console.log(movies);

  return (<div>
    <h1>Home</h1>
  </div>)
}