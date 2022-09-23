import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css"
import { Link } from "react-router-dom";


const Card = ({movie}) => {

    const [isLoading,setisLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setisLoading(false)
        },1500)
    },[])


  return (
    <div>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2}/>
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                movie ? movie.poster_path : ""
              }`}
              alt=""
              className="cards__img"
            />
            <div className="cards__overlay">
              <div className="cards_title">
                {movie ? movie.orinal_title : ""}
              </div>
              <div className="cards__runtime">
                {movie ? movie.release_date + " " : ""}
                <span className="cards__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="cards_discription">
                {movie ? movie.overview.slice(0, 100) + "...." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
  }

export default Card;
