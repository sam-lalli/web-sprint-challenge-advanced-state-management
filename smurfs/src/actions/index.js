import axios from 'axios'



export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS =  "FETCH_SUCCESS"
export const FETCH_FAILURE =  "FETCH_FAILURE"

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