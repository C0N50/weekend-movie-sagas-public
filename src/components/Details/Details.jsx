import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from "react-router-dom";

function Details() {
            
	const history = useHistory();

    const handleGoToMovieList = () => {
        history.push("/");
    }

    return (
        <>
        <h2>Details:</h2>
        <button onClick={handleGoToMovieList}>Back</button>
        </>
    )

}

export default Details;





