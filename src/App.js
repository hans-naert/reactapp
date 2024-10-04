import './App.css';
import Counter from './Counter.js'
import React, { useState, createContext } from 'react';
import Countries from './Countries.js';

const TotalContext = createContext();

function App() {
  
  return (
    <>
     
      <Counter/> <hr />
      <Counter focus={true}/> <hr />
      <Counter/> <hr /> 
      <Countries/>
    </>
  );
}

export default App;