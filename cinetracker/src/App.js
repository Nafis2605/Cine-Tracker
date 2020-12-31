import React, { useState } from "react";
import Navbar from "../src/components/Navbar"
import Searchbar from "../src/components/Searchbar"
import { getMoviesByTerm } from "../src/API/TMDB"

import MovieList from "../src/components/MovieList"
import Pagination from "./components/Pagination";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState("1")
  const [totalPages, setTotalPages] = useState("0")


  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMoviesByTerm(searchTerm, setMovies, currentPage, setTotalPages);
  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const nextPage = async (pageNumber) => {
    setCurrentPage(pageNumber)
    await getMoviesByTerm(searchTerm, setMovies, currentPage, setTotalPages)
  }



  return (
    <div>
      <Navbar />
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <MovieList movies={movies} />
      {totalPages > 1 ? <Pagination
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      /> : ""}
    </div>
  )
}
export default App;

