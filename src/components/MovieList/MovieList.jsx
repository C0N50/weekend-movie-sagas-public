import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';


/**
 * @returns a list of @MovieItem components. Each component routes to its individual @Details route and component on click.
 * The movie list is provided by the @movies reducer which is populated by the index.js.
 * Send prop @movie to component @MovieItem to be use 
 */
function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        < MovieItem className='movie-item' key={movie.id}  movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;