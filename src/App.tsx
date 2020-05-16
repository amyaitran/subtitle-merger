import React, { Component } from 'react';
import './App.css';
import {
  Stepper,
  UploadButton,
  Grid,
} from './components';

class App extends Component {
  // constructor(props) {
  // }
  render() {
    return (
      <div className="App">
        <Grid>{[<Stepper />, <Stepper />]}</Grid>
        <UploadButton />
      </div>
    );
  }
}

export default App;
