import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import NavBar from "../NavBar";
import requests from "../Requests.js";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar> </NavBar>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      ></Row>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="SPECIAL MOVIES" fetchUrl={requests.fetchActionMovies}></Row>
      <Row
        title="DAILY RECOMENDATION"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
    </div>
  );
}

export default HomeScreen;
