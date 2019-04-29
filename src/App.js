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
    this.handleChange = this.handleChange.bind(this);
    this.addTodos = this.addTodos.bind(this);

  }

  handleChange(e){
    this.setState({value: e.target.value});
    }
    
    addTodo(todo){
    if (
      todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
      }
      addTodos(todo);
    }

  addTodos(todo){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todo});
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
          <input
            className="todoInput"
            type="text" value={this.state.value}
            onChange={this.handleChange}
          />
          <button 
            className="todoButton"
            onClick={() => this.addTodo(this.state.value)}
          >
            Submit
          </button>
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







