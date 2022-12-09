import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

// components
import { Posts } from './containers/posts/Posts.jsx';
import Reference from './containers/Reference';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
      <br></br>
      <Reference />
    </>
  );
}

export default App;
