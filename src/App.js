import './App.css';
import Counter from './Counter.js'
import React, { useState, createContext } from 'react';

const TotalContext = createContext();

function App() {
  
  return (
    <>
      <Counter/> <hr />
      <Counter focus={true}/> <hr />
      <Counter/> <hr />
    </>
  );
}

export default App;