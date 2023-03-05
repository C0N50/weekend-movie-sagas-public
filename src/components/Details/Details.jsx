import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from "react-router-dom";
import './Details.css'


/**
 * The Details Component renders the Details page under the persistent header.
 * Two map functions are used because the details reducer object contains two arrays.
 * @object detailts - contains two array fields
 * @field description - single index array holding object  @field poster, @field title, @field description
 * @field genres - multiple array index. each index contains an object containing @field id, @field name
 */
function Details() {

    //Access details reducer
    const movieDetails = useSelector(store => store.details)
    const history = useHistory();

    //split details reducer into arrays
    const movieDescription = movieDetails?.description;
    const movieGenres = movieDetails?.genres;

    //on Click sends user back to movie list
    const handleGoToMovieList = () => {
        history.push("/");
    }

    return (
        <>
            {movieDescription?.map(description => {
                return (
                    <div key={description.title} className="details" >
                        <div onClick={handleGoToMovieList} className="grid-image">
                            <img className='image-style' src={description.poster} alt={description.title} />
                            <div><h3 className='movie-title'>{description.title}</h3></div>
                            <div>
                                {movieGenres?.map(genre => {
                                    return (
                                        <div className="genre-style" key={genre.id}>{genre.name}</div>
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





