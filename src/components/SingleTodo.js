import React from 'react';
import { NavLink } from 'react-router-dom'

const SingleTodo = (props) => {

    
    const id = parseInt(props.match.params.todo_id)

    var single = props.todo.find(item => item.id === id);

    let name = '';
    

    for (var key in single) {
       
        if(key==='name'){
            name = single[key];
        }
        
       
    }



     
    console.log(name);
  
    
  
  
    // console.log(single);
    // console.log(single.name);

    // var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

    // console.log(person);

    // console.log(person.firstName);

    // let output=''
    // for (var property in single) {
    //     output +=  property;
    //   }
    //   console.log(output);
      
    
    return (

        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            {/* <input  id="name" type="text" name="name" onChange={() => props.changeInput()} value={name} />  */}
                            <input  id="name" type="text" name="name" onChange={props.changeInput} value={name} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="last_name" type="text"  />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>

            <NavLink className="nav-link" to='/todo'>All Todos</NavLink>
        </div>



    )
}
export default SingleTodo