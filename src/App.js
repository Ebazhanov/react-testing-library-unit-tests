import React from 'react';
import Button from "./components/button/Button";
import './App.css';
import Clickers from "./components/clicker/Clickers";

function App() {
  return (
    <div className="App">
        <Clickers/>
      <header className="App-header">
        <Button label="click on me please">Button</Button>
      </header>
    </div>
  );
}

export default App;
