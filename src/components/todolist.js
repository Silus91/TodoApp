import React from 'react';

export default class TodoList extends React.Component{
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div>
        <button>
          To do List!
        </button>
        <div>
          <form>
            <input type="text"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}