import {CHANGE_SERVICE_FIELD, CHANGE_SERVICE_TO_EDIT} from '../actions/actionTypes'

const initialState = {
    id: null,
    name: '',
    price: '',
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            console.log(name, value)
            return {...state, [name]: value};
            ////////
        case CHANGE_SERVICE_TO_EDIT:
            const {nameServ, price} = action.payload;
            return {...state, name: nameServ, price: price};
        default:
            return state;
    }
}