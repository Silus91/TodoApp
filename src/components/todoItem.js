import React from 'react';
import './todoItem.css'

export default class TodoItem extends React.Component{

  removeTodo(id){
    this.props.removeTodo(id);
  }

  render(){
    return(
    <div className="todoItem">
            <div className="todoiItemParagraph">{this.props.todo.text}</div>
        <button className="removeTodoButton" onClick={()=> this.removeTodo(this.props.id)}>
          Remove
        </button>
    </div>
    );
  }
}