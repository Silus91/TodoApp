import React from 'react';

export default class TodoList extends React.Component{


  render() {
    return (
      <div>
        <button>
          To do List!
        </button>
        <div>
          <form>
            <input type="text"/>
            <button type="submit">Lets go</button>
          </form>
          <div className="todoItem">
            <div className="todoiItemParagraph">{this.props.todo.text}</div>
        <button className="removeTodoButton" onClick={()=> this.removeTodo(this.props.id)}>
          Remove
        </button>
          </div>
        </div>
      </div>
    );
  }
}