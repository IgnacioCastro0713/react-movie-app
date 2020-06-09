import React from 'react';
import useFetch from '../hooks/useFetch';
import { Slider, List } from '../components';
import { Row, Col } from 'antd';


import { API_KEY, API_URL } from '../config/env';

export default function Home() {
  const newMovies = useFetch(`${ API_URL }/movie/now_playing?api_key=${ API_KEY }&language=es-ES&page=1`);
  const popularMovies = useFetch(`${ API_URL }/movie/popular?api_key=${ API_KEY }&language=es-ES&page=1`);
  //console.log(popularMovies);
  return <>
    <Slider movies={ newMovies }/>
    <Row>
      <Col span={ 12 }>
        <List title='Popular Movies' movies={ popularMovies }/>
      </Col>
      <Col span={ 12 }>
        <List movies={ popularMovies }/>
      </Col>
    </Row>
  </>
}