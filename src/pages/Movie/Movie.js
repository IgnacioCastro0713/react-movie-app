import React from 'react';
import {Row, Col, Button} from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { API_KEY, API_URL } from '../../config/env';
import Loading from "../../components/Loading";

import './Movie.scss'

function Movie() {
  const params = useParams();
  console.log(params);

  return (<div>
    <h1>Movie..</h1>
  </div>);
}

export default Movie;