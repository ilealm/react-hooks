/**
 * Nav example from https://reactrouter.com/web/example/basic
 */
import React from "react";

// here all my componets
import App from './App';
import WindowSize from './WindowSize'   // all this names MUST start with uppercase
import WordCounter from './WordCounter'
import UsedToBe from './UsedToBe'
import IncrementDecrement from './IncrementDecrement'
import ToDo from './ToDo'
import Slower from './Slower'
import ContextExample from './ContextExample'

// I had to execute npm install react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">useRef and useReducer</Link>
          </li>
          <li>
            <Link to="/Examples2">useEffect, add Listener</Link>
          </li>
          <li>
            <Link to="/Examples3"> useContext, useMemo</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Examples2">
            <Examples2 />
          </Route>
          <Route path="/Examples3">
            <Examples3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>useRef and useReducer</h2>
      <ToDo/>
      <IncrementDecrement/>
      <WordCounter/>
      <UsedToBe/>
    </div>
  );
}

function Examples2() {
  return (
    <div>
      <h2>useEffect, add Listener</h2>
      <WindowSize />
      <App />
    </div>
  );
}

function Examples3() {
  return (
    <div>
      <h2>useContext</h2>
      <ContextExample />
      <br></br><br></br>
      <h2>useMemo</h2>
      <Slower />

    </div>
  );
}
