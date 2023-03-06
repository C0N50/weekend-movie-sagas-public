import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

/**
 *  Creates the rootSaga generator function
 */
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', addMovie)
}


/**
 * Fetches all movies from the DB to be displayed on MovieList component.
 * Calls axios get on movie endpoint to request movie list from server.
 * Sets movies array reducer with received movieList array.
 */
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}
/**
 * Fetches a description of a single movie from the sever/DB based on the movies @id 
 * The @id is provided by the @MovieItem component.
 * @param {object} action - object received from dispatch containing fields: @type, @payload 
 * @type can either equal @ADD_DESCRIPTION or @ADD_GENRES each pertains to idividual put calls to seperate reducers.
 * @payload is the id of the movie
 */
function* fetchDetails(action) {
    try {
        const description = yield axios.get(`/api/movie/${action.payload}`);
        yield put({ type: 'ADD_DESCRIPTION', payload: description.data });

        const genres = yield axios.get(`/api/genre/${action.payload}`);
        yield put({ type: 'ADD_GENRES', payload: genres.data });

    } catch {
        console.log('get details error');
    }
}


function* fetchAllGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
}


function* addMovie(action) {
    try {
        yield axios.post('/api/movie', action.payload);
        fetchAllMovies();
    } catch (error) {
        console.log('post movie error');
    }
}

// Creates sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Reducer used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//Reducer used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

/**
 * Reducer used to store details. Contains two distice @fields
 * @description - Array containing single description object
 * @genres - Array containing multiple genre objects
 */
const details = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'ADD_GENRES':
            return { ...state, genres: action.payload };
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
