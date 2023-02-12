import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios.js";

function Row({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);

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
    </div>
  );
}

export default Row;
