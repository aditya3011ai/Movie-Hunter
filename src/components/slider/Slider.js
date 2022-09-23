import React, { useEffect, useState } from "react";
import "./Home.css";
import Axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Slider = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d4a412e25cbc50a1df9bfa99c7524bf0&language=en-US"
    ).then((res) => {
      setPopularMovies(res.data.results);
    });
  }, []);

  return (
    <div>
      {" "}

    </div>
  );
};

export default Slider;
