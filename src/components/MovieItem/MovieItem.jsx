import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../MovieList/MovieList.css'
import { useHistory } from "react-router-dom";


function MovieItem({ movie }) {

    const movieDetails = useSelector(store => store.details)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleGoToMovieView = () => {


    dispatch({
        type: 'FETCH_DETAILS',
        payload: movie.id
    })


    console.log('movie details', movieDetails)

    history.push("/Details");

}


return (
    <div key={movie.id} >
        <h3>{movie.title}</h3>
        <img onClick={handleGoToMovieView} src={movie.poster} alt={movie.title} />
    </div>
)

}

export default MovieItem;