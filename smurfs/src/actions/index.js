import axios from 'axios';

// Fetch Smurf from server (GET)

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

//Add smurf to server (POST)

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

// Async action creator

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios   
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response });
        });
};

export const addSmurfs = (addSmurfData) => dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios       
        .post('http://localhost:3333/smurfs', addSmurfData)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
        })
        .catch(error => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: error.response });
        })
};

