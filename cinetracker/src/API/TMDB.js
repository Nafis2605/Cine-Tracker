import axios from "axios";

const TMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
}
);

const getMoviesByTerm = (SearchTerm, setMovies, pageNumber, setTotalPages) => {
    TMDB.get("/search/movie", {
        params: {
            api_key: "99928e4fd2fca410d2eac58af3bd28cf",
            query: SearchTerm,
            page: pageNumber
        }
    }).then((response) => {
        console.log(response);
        setMovies(response.data.results)
        setTotalPages(response.data.total_pages)
    }
    )
}
export { getMoviesByTerm };
