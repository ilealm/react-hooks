/**
 * Examples based on Web Dev Simplified
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WindowSize from './WindowSize'   // all this names MUST start with uppercase
import WordCounter from './WordCounter'
import UsedToBe from './UsedToBe'
import IncrementDecrement from './IncrementDecrement'
import ToDo from './ToDo'
import * as serviceWorker from './serviceWorker';

import Nav from './nav'



ReactDOM.render(
  <React.StrictMode>
    <Nav/>


    <ToDo/>
    <IncrementDecrement/>
    <WordCounter/>
    <UsedToBe/>
    <WindowSize />
    <App />


  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
