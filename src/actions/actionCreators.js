import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD,
    CHANGE_SERVICE_TO_EDIT, FILTER_SERVICE_LIST, FILTER_SERVICE, CANCEL_EDIT } from './actionTypes';

export function addService(servId, name, price) {
    return {type: ADD_SERVICE, payload: {servId, name, price}};
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function serviceToEdit(nameServ, price, id) {
    return {type: CHANGE_SERVICE_TO_EDIT, payload: {nameServ, price, id} }
}

export function filterServiceList(input) {
    return {type: FILTER_SERVICE_LIST, payload: input}
}

export function filterService(str) {
    return {type: FILTER_SERVICE, payload: str}
}

export function cancelEdit() {
    return {type: CANCEL_EDIT}
}


