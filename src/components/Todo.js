import React from 'react';
import {NavLink } from 'react-router-dom'

const Todo = (props) => {

    
    return (


    <div className="ninja-list">
      <br/>
      <NavLink className="btn btn-primary" exact to="/">Add New Todo</NavLink>
      { 
        props.todo.map( (ninja, index) => {
          return (

              <div className="post card" key={ninja.id}>
                <div className="card-content">
                <span className="card-title">{ninja.name}</span>
                <NavLink className="btn btn-outline-primary"  to={'/todo/'+ninja.id}>edit</NavLink>&nbsp;&nbsp;
                {/* <button className="btn btn-outline-danger"  onClick={props.deleteTodo(ninja.id)}>delete</button> */}
                <button className="btn btn-outline-danger"  >delete</button>
                </div>
            
              
              </div>
            
          )
        })
      }
     
    </div>
        
        
    //     props.todo.map(post => {
    //         return (
              
    //           <div className="post card" key={post.id}>
    //             <div className="card-content">
    //             <span className="card-title">{post.name}</span>
    //             <NavLink className="btn btn-outline-primary"  to={'/todo/'+post.id}>edit</NavLink>&nbsp;&nbsp;
    //             <NavLink className="btn btn-outline-danger" exact to="/">delete</NavLink>
                  
    //             </div>
    //           </div>
    //         )}
    // )
    
    )
}
export default Todo