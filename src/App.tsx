import React, { Component } from 'react';
import './App.css';
import { Stepper, UploadButton, Grid } from './components';
import { read } from 'fs';

class App extends Component {
  // constructor(props) {
  // }
  readFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader: FileReader = new FileReader();
    if (e.target.files == null) {
      console.log('No file selected');
      return;
    }
    let file: File = e.target.files[0];
    reader.readAsText(file);
    reader.onload = (e) => {
      console.log('loading the text');
      console.log(e.target?.result);
    };
    reader.onerror = (e) => {
      console.log('error reading text');
    };
  };

  render() {
    return (
      <div className="App">
        <Grid>{[<Stepper />, <Stepper />]}</Grid>
        <UploadButton onChange={this.readFile} />
      </div>
    );
  }
}

export default App;
