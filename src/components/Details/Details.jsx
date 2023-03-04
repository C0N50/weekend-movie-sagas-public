import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from "react-router-dom";
import './Details.css'

function Details() {

    const movieDetails = useSelector(store => store.details)
    const history = useHistory();
    
    const movieDescription = movieDetails?.description;
    const movieGenres = movieDetails?.genres;

    const handleGoToMovieList = () => {
        history.push("/");
    }

    return (
        <>
        <h2 className='details-header'>Details:</h2>
        <button onClick={handleGoToMovieList}>Back To List</button>

        <section className="details">
                {movieDescription?.map(description => {
                    return (
                        <div key={description.title} >
                        <h3>{description.title}</h3>
                        <img src={description.poster} alt={description.title} />
                        <h3>Description:</h3>
                        <div>{description.description}</div>
                        <h3>Genres:</h3>
                        {movieGenres?.map(genre => {
                            return (
                            <div key={genre.id}>{genre.name}</div>
                            )
                        })}
                    </div>
                    );
                })}
            </section>


        </>
    )

}

export default Details;





