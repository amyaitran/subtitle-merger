import React from 'react';
import './App.css';
import {
  SearchBar,
  Stepper,
  // Paper,
  Container,
  UploadButton,
  Grid,
} from './components';

function App() {
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

export default App;
