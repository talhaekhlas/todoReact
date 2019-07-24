import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/Home'
import Todo from './components/Todo'
import SingleTodo from './components/SingleTodo'

class App extends Component {

  state = {
    todo: []
  }


  componentDidMount(){
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        
        this.setState({
          todo: res.data.data
        });
      })
  }

  deleteTodo = (id)=>{
       console.log('kjhkj');

       

      //  axios.get('http://localhost:8000/api/todo')
      // .then(res => {
        
      //   this.setState({
      //     todo: res.data.data
      //   });
      // })
  }


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="container">
          <Route exact path='/' component={Home}/>
          {/* <Route exact path='/todo' render={() => <Todo todo={this.state.todo}  deleteTodo={this.deleteTodo} />} /> */}
          <Route exact path='/todo' render={() => <Todo todo={this.state.todo}   />} />
          <Route exact path='/todo/:todo_id' component={SingleTodo}/>
        </div>
        
        {/* <Route path='/contact' component={Contact} /> */}
      </div>
    </BrowserRouter>
    );
  }
}

export default App;