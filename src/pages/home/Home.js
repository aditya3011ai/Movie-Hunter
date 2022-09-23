import React, { useEffect, useState } from 'react';
import "./Home.css";
import Axios  from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import MovieList from '../../components/movielist/MovieList';

const Home = () => {

  const [popularMovies,setPopularMovies]=useState([]);

  useEffect(()=>{
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d4a412e25cbc50a1df9bfa99c7524bf0&language=en-US"
    ).then((res)=>{
      setPopularMovies(res.data.results);
    });
  },[])

  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movies/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt="img"
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>

                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList/>
      </div>
    </div>
  );
  
}

export default Home;