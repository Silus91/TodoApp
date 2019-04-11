import React from 'react';
import TodoInput from './todoinput';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  navbar(){
    <TodoInput/>
  }

  render() {
    return(
      <div>
        <div>
          Profile
        </div>
        <div>
          Navigation
        </div>
        <div>
          Dice
        </div>
        <div>
          Todo Stuff
          <p></p>
        </div>
      </div>
    );
  }
}