import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./style.scss";
import api from "../../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.get("products").then(({ data }) => {
      setMovies(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      {movies?.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={movie.image}
          price={movie.price}
        />
      ))}
    </div>
  );
};

export default Home;
