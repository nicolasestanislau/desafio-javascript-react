import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./style.min.css";
import api from "../../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    api.get("products").then(({ data }) => {
      setMovies(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      {loading === false ? (
        movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.image}
            price={movie.price}
          />
        ))
      ) : (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Home;
