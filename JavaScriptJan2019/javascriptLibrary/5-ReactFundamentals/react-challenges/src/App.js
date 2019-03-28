import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';


class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <Sidebar/>
        </Router>
       
      </div>
    )
  }
}

export default App;