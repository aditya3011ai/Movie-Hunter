import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./movieList.css";
import Axios from "axios";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  let { type } = useParams();

  useEffect(() => {
    getData();
  }, []);
  useEffect(
    () => {
      getData();
    },[type]);

  const getData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=d4a412e25cbc50a1df9bfa99c7524bf0&language=en-US`
    ).then((res) => {
      setMovieList(res.data.results);
    });
  };
  return (
        <div className="movie_list">
            <h2 className="movie_title">{(type ? type=="top_rated"?"top rated":type :"POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                movieList.map(movie=>(
                    <Card movie={movie} key={movie.id}/>
                ))

                }
            </div>
        </div>
    );
};

export default MovieList;
