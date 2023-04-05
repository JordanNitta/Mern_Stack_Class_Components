import React from 'react';
import './App.css';
import './assets/css/styles.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        <Navigation />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
