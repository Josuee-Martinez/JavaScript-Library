import React from 'react';

class DayOneComp extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: 'paul',
      age: 44,
      favColor: 'blue'
    }
  }

  logState = () => {
    console.log(this.state);
  }

  render() {
    return(
      <button onClick={this.logState}>Click me to log state</button>
    )
  }
}

 export default DayOneComp;