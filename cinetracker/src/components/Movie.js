import React from "react";

const Movie = (props) => {

    const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;

    return (
        <div className="col s12 m4" >
            <div className="card">
                <div className="card-image">
                    {props.data.poster_path == null ? (
                        <img
                            src="https://picsum.photos/200/300/?blur=2"
                            alt={props.data.original_title}
                        />
                    ) :
                        (
                            <img src={ImageURL} alt={props.data.original_title} />

                        )
                    }
                    <a className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">add</i></a>

                </div>
                <div class="card-content">
                    <span className="card-title">{props.data.original_title}</span>
                    <p><b>Release Date: </b> {props.data.release_date}</p>
                    <p><b>Rating: </b>{props.data.vote_average}</p>


                </div>
            </div>
        </div>
    )
}

export default Movie;



