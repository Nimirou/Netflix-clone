import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios.js";

function Row({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2 className="rowTitle">{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLarge && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              ></img>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
