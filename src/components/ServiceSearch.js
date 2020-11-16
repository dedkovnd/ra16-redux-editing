import React  from 'react'
import {useDispatch, useSelector} from "react-redux";
import {filterServiceList} from "../actions/actionCreators";

export function ServiceSearch () {
   const filter = useSelector(state=> state.serviceSearch.filterInput)
    const dispatch = useDispatch()

    console.log(filter)

    const handleChange = evt => {
        dispatch(filterServiceList(evt.target.value));
    }

    return (
        <div>
            <input type="text" value={filter} onChange={handleChange}/>
        </div>
    )
}