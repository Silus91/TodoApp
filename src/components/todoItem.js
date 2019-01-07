import React from 'react';
import './todoItem.css'

export default class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }

  removeTodo(id){
    this.props.removeTodo(id);
  }

  render(){
    return(
    <div className="todoItem">
            <p>{this.props.todo.text}</p>
        <button className="removeTodoButton" onClick={(e)=> this.removeTodo(this.props.id)}>
          Remove
        </button>
    </div>
    );
  }
}