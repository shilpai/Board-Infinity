import React from 'react';
import './App.css';
import Problem1 from './components/Problem1';
import Problem2 from './components/Problem2';
import { BrowserRouter as Router } from 'react-router-dom';
import Problem3 from './components/Problem3';
import { useState } from 'react';

function App() {
  const [mainVal,setMainVal] = useState(0)
  return (
    <main>
      <Router>
      {(mainVal !== 0) && <button className='btn btn-success main-btn' onClick={()=>setMainVal(0)}><i className="fa-solid fa-arrow-circle-left"></i> MENU</button>}

      {(mainVal == 0) && 
        <div className='main-btns'>
      <button className='btn btn-primary' onClick={()=>setMainVal(1)}>Problem 1</button>
      <button className='btn btn-primary' onClick={()=>setMainVal(2)}>Problem 2</button>
      <button className='btn btn-primary' onClick={()=>setMainVal(3)}>Problem 3</button>
      </div>}
      
      {(mainVal === 1) && <Problem1 />}
      {(mainVal === 2) && <Problem2 />}
      {(mainVal === 3) && <Problem3 />}
      </Router>
    </main>
  );
}

export default App;