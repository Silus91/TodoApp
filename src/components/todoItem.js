import React from 'react';


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
      <li>
          {this.props.todo.text}
        <button className="removeTodoButton" onClick={(e)=> this.removeTodo(this.props.id)}>
          Remove
        </button>
      </li>
    </div>
    );
  }
}