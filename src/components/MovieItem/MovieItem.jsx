import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../MovieList/MovieList.css'
import { useHistory } from "react-router-dom";
import "./MovieItem.css"


function MovieItem({ movie }) {

    const movieDetails = useSelector(store => store.details)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleGoToMovieView = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })
        history.push("/Details");
    }

    return (
        <div className="movie-card" onClick={handleGoToMovieView}>
            <img className='image-button' width='100%' src={movie.poster} alt={movie.title} />
            <div className="container">
            <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieItem;