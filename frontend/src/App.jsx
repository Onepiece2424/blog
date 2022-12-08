import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

// components
import { Posts } from './containers/Posts.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
