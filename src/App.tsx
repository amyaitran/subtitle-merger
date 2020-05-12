import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar, Stepper, Paper, Container } from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <SearchBar />
      <Stepper />
      <Paper />
    </div>
  );
}

export default App;
