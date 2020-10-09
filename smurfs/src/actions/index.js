import axios from 'axios'



export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS =  "FETCH_SUCCESS"
export const FETCH_FAILURE =  "FETCH_FAILURE"

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const fetchSmurfs = () => (dispatch) =>{
    dispatch({ type: FETCH_START });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err, 'fetched failed!')
        dispatch({ type: FETCH_FAILURE, payload: err})
    })
}

export const addSmurfs = (newSmurf) => (dispatch) => {
    dispatch({ type: ADD_SMURF_START});
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        console.log(res)
        dispatch({type: ADD_SMURF_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log("didnt work", err)
        dispatch({type: ADD_SMURF_FAILURE, payload: err})
})

}