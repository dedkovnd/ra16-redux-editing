import {FILTER_SERVICE_LIST} from '../actions/actionTypes';

const initialState = {
    filterInput: ''
}

const serviceSearchReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FILTER_SERVICE_LIST: {
            return {
                ...state,
                filterInput: action.payload
            }
        }
        default:
            return state
    }
}

export default serviceSearchReducer;