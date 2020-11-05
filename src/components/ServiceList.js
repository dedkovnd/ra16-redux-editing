import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {editService, removeService, changeServiceField, serviceToEdit} from '../actions/actionCreators';


function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeService(id));
    }
    /////////
    const handleEdit = id => {
        let targetService = items.filter(serv=>serv.id === id )
        targetService = targetService.length > 0 ? targetService[0] : null

        if(targetService !== null) {
            let {name, price, id} = targetService
            dispatch(serviceToEdit(name, price, id))
        }
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