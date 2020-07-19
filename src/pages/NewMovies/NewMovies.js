import React, { useEffect, useState } from 'react';
import { Col, Row } from "antd/lib";
import { API_KEY, API_URL } from '../../config/env';
import { Loading, MovieCatalog, Pagination } from '../../components';

export default function NewMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${ API_URL }/movie/now_playing?api_key=${ API_KEY }&language=es-ES&page=${ page }`);
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = page => {
    setPage(page);
  };

  return (
    <Row>
      <Col span={ 24 } style={ { textAlign: "center", marginTop: 25 } }>
        <h1 style={ { fontSize: 35, fontWeight: "bold" } }>
          Latest releases
        </h1>
      </Col>
      { movieList.results ? (
        <Row>
          <MovieCatalog movies={ movieList }/>
          <Col span={ 24 }>
            <Pagination
              currentPage={ movieList.page }
              totalItems={ movieList.total_results }
              onChangePage={ onChangePage }/>
          </Col>
        </Row>
      ) : (
        <Col span={ 24 }>
          <Loading/>
        </Col>
      ) }
    </Row>
  );
}