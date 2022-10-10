import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

export default function App() {
  const [movie, setMovie] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    );
    setMovie(data);
    console.log(data);
  };

  const removeMovie = (title) => {
    console.log("here");
    movie.filter((m) => m.Title !== title);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Movie movie={movie} removeMovie={removeMovie} />
    </div>
  );
}
