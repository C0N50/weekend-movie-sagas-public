import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./MovieForm.css"



function MovieForm() {

    //declare dependencies
    const dispatch = useDispatch();
    const history = useHistory();

    //load genres for dropdown input on load. This is to provide scalable genres.
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);
    const genres = useSelector(store => store.genres);


    //Declare local state variables for form input.
    const [newTitleInput, setNewTitleInput] = useState("");
    const [newPosterInput, setNewPosterInput] = useState("");
    const [newDescriptionInput, setNewDescriptionInput] = useState("");
    const [newGenreInput, setNewGenreInput] = useState("1");

    /**
     * 
     * Handles form submit with inputs: @title @poster @description and @genre_id to create @newMovie object
     * Dispatches action to SAGA with fields type: @FETCH_GENRES payload: @newMovie
     * SAGA then calls axiox @POST to request the server to add the @newMovie to the Database
    */
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked submit')

        //input validation
        if (newTitleInput && newPosterInput && newDescriptionInput && newGenreInput) {

            //object to be sent via POST
            const newMovie = {
                title: newTitleInput,
                poster: newPosterInput,
                description: newDescriptionInput,
                genre_id: newGenreInput
            }
            console.log('newMovie', newMovie);

            //dispatch to SAGA
            dispatch({
                type: 'ADD_MOVIE',
                payload: newMovie
            })

            //clear Inputs
            setNewTitleInput('');
            setNewPosterInput('');
            setNewDescriptionInput('');

            //navigate to home page
            history.push("/");
        }
        else {
            alert('Please Enter Valid Input');
        }
    }

    //navigate to homepage
    const handleCancel = () => {
        history.push("/");
    }

    return (
        <>
            <section className="movie-form">
                <form onSubmit={handleSubmit}>
                    <div className='form-card'>
                        <div className='title-input'>
                            <label>Title:</label>
                            <input className='form-text-inputs'
                                type="text"
                                placeholder="Add New Title"
                                onChange={(e) => setNewTitleInput(e.target.value)}
                                value={newTitleInput} />
                        </div>
                        <div className='poster-url'>
                            <label>Poster URL:</label>
                            <input className='form-text-inputs'
                                type="text"
                                placeholder="Add New Poster URL"
                                onChange={(e) => setNewPosterInput(e.target.value)}
                                value={newPosterInput} />
                        </div>
                        <div className='description'>
                            <label>Descrpition:</label>
                            <textarea className="description-textarea" rows="10" cols="75" resize="none"
                                type="text"
                                placeholder="Add New Description"
                                onChange={(e) => setNewDescriptionInput(e.target.value)}
                                value={newDescriptionInput} ></textarea>
                        </div>
                        <div className='genres'>
                            <label>Genres:</label>
                            <select id="cars" name="cars">
                                {genres?.map(genre => {
                                    return (
                                        <option onChange={(e) => setNewGenreInput(e.target.value)} key={genre.id} value={genre.id}>{genre.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div><button onClick={handleCancel} className='cancel-button'>Cancel</button></div>
                        <div><input type='submit' className='submit-button' /></div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default MovieForm;