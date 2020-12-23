import axios from "axios";

const TMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
}
);

const getMoviesByTerm = (SearchTerm, setMovies) => {
    TMDB.get("/search/movie", {
        params: {
            api_key: "99928e4fd2fca410d2eac58af3bd28cf",
            query: SearchTerm,
        }
    }).then((response) => {
        console.log(response);
        setMovies(response)
    }
    )
}
export { getMoviesByTerm };
