import React from 'react';
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { API_KEY, API_URL } from '../../config/env';
import Loading from "../../components/Loading";

import './Movie.scss'

function Movie() {
  const { id } = useParams();
  const movieInfo = useFetch(`${ API_URL }/movie/${ id }?api_key=${ API_KEY }&language=es-ES`);

  if (movieInfo.loading || !movieInfo.result) {
    return <Loading/>
  }

  return (
    <Render movie={ movieInfo.result }/>
  );
}

function Render(props) {
  const { movie: { backdrop_path, poster_path } } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original/${ backdrop_path }`;

  return (
    <div className="movie" style={ { backgroundImage: `url('${ backdropPath }')` } }>
      <div className="movie__dark"/>
      <Row>
        <Col span={ 8 } offset={ 3 } className="movie__poster">
          <Poster image={ poster_path }/>
        </Col>
        <Col span={ 10 } className="movie__info">
          <Info movieInfo={ props.movie }/>
        </Col>
      </Row>
    </div>
  );
}

function Poster(props) {
  const { image } = props;
  const posterPath = `https://image.tmdb.org/t/p/original/${ image }`;
  return <div style={ { backgroundImage: `url('${ posterPath }')` } }/>
}

function Info(props) {
  const { movieInfo: { id, title, release_date, overview, genres } } = props;
  return <>
    <div className="movie__info-header">
      <h1>
        { title }
        <span>{ moment(release_date, "YYYY-MM-DD").format("Y") }</span>
      </h1>
      <button>
        Watch Trailer
      </button>
    </div>
    <div className="movie__info-content">
      <h3>General</h3>
      <p>{ overview }</p>
      <h3>Genres</h3>
      <ul>
        {
          genres.map(genre => (<li key={ genre.id }>{ genre.name }</li>))
        }
      </ul>
    </div>
  </>;
}

export default Movie;