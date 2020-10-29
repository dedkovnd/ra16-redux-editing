import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {editService, removeService,changeServiceField} from '../actions/actionCreators';


function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeService(id));
    }
    /////////
    const editState = useSelector(state => state.serviceAdd)

    const handleEdit = id => {
        editState.dispatch(changeServiceField(dispatch(editService(id))))
    }
    //////////////////////
    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={()=>handleEdit(o.id)}>Edit</button>
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList