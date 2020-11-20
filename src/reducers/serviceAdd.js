import {CHANGE_SERVICE_FIELD, CHANGE_SERVICE_TO_EDIT, CANCEL_EDIT} from '../actions/actionTypes'

const initialState = {
    id: null,
    name: '',
    price: '',
    edit: false
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            console.log(state)
            return {...state, [name]: value};
        case CHANGE_SERVICE_TO_EDIT:
            const {nameServ, price, id} = action.payload;
            return {...state, name: nameServ, price: price, edit: true, id: id};
        case CANCEL_EDIT:
            return {...initialState}
        default:
            return state;
    }
}