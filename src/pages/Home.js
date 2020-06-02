import React from 'react';
import useFetch from '../hooks/useFetch';
import { Slider } from '../components';

import { API_KEY, API_URL } from '../config/env';

export default function Home() {
  const newMovies = useFetch(`${ API_URL }/movie/now_playing?api_key=${ API_KEY }&language=es-ES&page=1`);
  return <>
    <Slider movies={ newMovies }/>
  </>
}