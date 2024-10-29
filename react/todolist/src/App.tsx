import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = '리액트';

  // in-line 스타일

  // const style = {
  //   background: 'black',
  //   color: 'white',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: '20px',
  // };

  return (
    <div className='container'>
      <h1 className='test'>
        Hello,
        {name === '리액트' ? <h1>YES</h1> : null}!!
      </h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;
