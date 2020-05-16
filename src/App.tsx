import React from 'react';
import './App.css';
import {
  SearchBar,
  Stepper,
  // Paper,
  Container,
  UploadButton
} from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <SearchBar />
      <Stepper />
      {/* <Paper /> */}
      <UploadButton />
    </div>
  );
}

export default App;
