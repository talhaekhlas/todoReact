import React from 'react';
import { NavLink } from 'react-router-dom'

const SingleTodo = (props) => {
    
    console.log('HH: ',props.todo);
    const id = parseInt(props.match.params.todo_id)

    const single = props.todo.find(item => item.id == id);
    console.log(single);
    return (
        
        <div>
            I am Single {props.match.params.todo_id}
            <NavLink className="nav-link" to='/todo'>All Todos</NavLink>
        </div>
    )
}
export default SingleTodo