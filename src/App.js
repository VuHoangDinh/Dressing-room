import React, { Component } from 'react';
import './App.css';
import Contain from './Components/Model/Contain';
import Btngroup from './Components/Store/Btngroup';
//import components

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="text-center">Dressing room Project</h1>
          <div className="row">
            {/* items */}
            <div className="col-md-6 col-lg-6">
              <Btngroup/>
            </div>
            {/* model */}
            <div className="col-md-6 col-lg-6">
              <Contain />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
