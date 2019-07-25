import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Todo from "./components/Todo";
import SingleTodo from "./components/SingleTodo";

class App extends Component {
  state = {
    todo: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/todo").then(res => {
      this.setState({
        todo: res.data.data
      });
    });
  }

  deleteTodo = id => {
    console.log(id);

    axios
      .delete("http://localhost:8000/api/todo/" + id)
      .then(res => {
        axios.get("http://localhost:8000/api/todo").then(res1 => {
          this.setState({
            todo: res1.data.data
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changeInput = (e)=>{
    
    console.log(e.target.value);
  }

  updateTodo = id => {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/todo"
              render={() => (
                <Todo todo={this.state.todo} deleteTodo={this.deleteTodo} />
              )}
            />
            {/* <Route
              exact
              path="/todo/:todo_id"
              render={() => (
                <SingleTodo
                  todo={this.state.todo}
                  deleteTodo={this.deleteTodo}
                  key={this.props.location.key}
                />
              )}
            /> */}

            <Route
              exact
              path="/todo/:todo_id"
             
              render={props => (
                <SingleTodo {...props}  todo={this.state.todo} deleteTodo={this.deleteTodo} changeInput={this.changeInput} />
              )}
            />

            {/* <Route exact path='/todo/:todo_id' component={SingleTodo}/> */}
          </div>

          {/* <Route path='/contact' component={Contact} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
