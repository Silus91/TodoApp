import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
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
        </div>
      </div>
    );
  }
}