import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./MovieForm.css"

function MovieForm() {

    const dispatch = useDispatch();



    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const genres = useSelector(store => store.genres);
    console.log(genres);

    return (
        <>
            <section className="movie-form">
                <form>
                    <div className='form-card'>
                        <div className='title-input'>
                            <label>Title:</label>
                            <input />
                        </div>
                        <div className='poster-url'>
                            <label>Poster URL:</label>
                            <input type="text" />
                        </div>
                        <div className='description'>
                            <label>Descrpition:</label>
                            <textarea className="description-textarea" rows="10" cols="75" resize="none" ></textarea>
                        </div>
                        <div className='genres'>
                            <label>Genres:</label>
                            <select id="cars" name="cars">
                                {genres?.map(genre => {
                                    return (
                                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='cancel-button'>Cancel</div>
                        <div className='submit-button'>Submit</div>

                    </div>
                </form>
            </section>
        </>
    )
}

// - an input field (for the movie title)
// - an input field (for the movie poster image URL))
// - a textarea (for the movie description)
// - a dropdown (for the genres)




export default MovieForm;