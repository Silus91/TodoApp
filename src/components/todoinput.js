import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);

    this.state = {value: ""};
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
  }

  render() {
    return (
      <div>
        <input className="todoInput" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="todoButton"
         onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
    );
  }
}