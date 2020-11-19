import {nanoid}  from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../actions/actionTypes'
import {useSelector} from "react-redux";


const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload;
            return [...state, {id: nanoid(), name, price: Number(price)}];
        case REMOVE_SERVICE:
            const {id} = action.payload;
            return state.filter(service => service.id !== id);
            /////////
        case FILTER_SERVICE:
            const str = action.payload
            if(str.length > 0) {
                return state.filter(e=> e.name.toLowerCase().startsWith(str))
            } else {
                return initialState;
            }
            ////////
        default:
            return state;
    }
}