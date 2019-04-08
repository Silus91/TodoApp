import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoinput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id:1, text:"test"}
      ], nextId:2
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({todos: todos, nextId: ++this.state.nextId});
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !==id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo}/>
          <ul className="ulApp">
            {this.state.todos.map((todo) => {
              return(
              <TodoItem 
                todo={todo}
                key={todo.id} 
                id={todo.id}
                removeTodo={this.removeTodo}/>
              ) 
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
