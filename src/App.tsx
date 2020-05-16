import React, { Component } from 'react';
import './App.css';
import {
  SearchBar,
  Stepper,
  // Paper,
  Container,
  UploadButton,
  Grid,
} from './components';

class App extends Component {
  // constructor(props) {
  // }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        {/* <SearchBar /> */}
        <Grid>{[<Stepper />, <Stepper />]}</Grid>
        {/* <Stepper /> */}
        {/* <Paper /> */}
        <UploadButton />
      </div>
    );
  }
}

export default App;
