import './App.css';
import Counter from './Counter.js'
import React, { useState, createContext } from 'react';

const TotalContext = createContext();

function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
    <TotalContext.Provider value={[total, setTotal]}>
      <Counter/> <hr />
      <Counter focus={true}/> <hr />
      <Counter/> <hr />
      <b>Total : {total}</b>
    </TotalContext.Provider>
    </>
  );
}

export default App;
export { TotalContext };
