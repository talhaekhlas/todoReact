import React from 'react';
import { NavLink } from 'react-router-dom'

const SingleTodo = (props) => {

    console.log(props.match.params.todo_id);
    return (
        
        <div>
            I am Single {props.match.params.todo_id}
            <NavLink className="nav-link" to='/todo'>All Todos</NavLink>
        </div>
    )
}
export default SingleTodo