import React, { useState } from "react";
import Navbar from "../src/components/Navbar"
import Searchbar from "../src/components/Searchbar"
import { getMoviesByTerm } from "../src/API/TMDB"

import MovieList from "../src/components/MovieList"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMoviesByTerm(searchTerm, setMovies);
  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <Navbar />
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  )
}
export default App;

