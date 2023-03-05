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

    return (
        <>
            {movieDescription?.map(description => {
                return (
                    <div key={description.title} className="details" >
                        {/* <div className="grid-title-card"></div> */}
                        <div className="grid-image">
                            <img className='image-style' src={description.poster} alt={description.title} />
                            <div><h3>{description.title}</h3></div>
                            <div>
                                {movieGenres?.map(genre => {
                                    return (
                                        <div key={genre.id}>{genre.name}</div>
                                    )
                                })}</div>
                        </div>


                        <div className="grid-description">{description.description}</div>


                    </div>
                );
            })}
        </>
    )

}

export default Details;





