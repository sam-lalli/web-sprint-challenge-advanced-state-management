import { 
    FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, 
    ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE
} from "../actions"

const initialState = {
    smurf: [],
    isLoading: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                smurf: action.payload,
                isLoading: false
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            return{
                ...state,
                isLoading: true
            }
        case ADD_SMURF_SUCCESS:
            return{
                ...state,
                smurf: action.payload.data,
                isLoading: false
            }
        case ADD_SMURF_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }


        default:
            return state;
    } 
}