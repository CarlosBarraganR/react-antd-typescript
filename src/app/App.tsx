import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeView } from '../views/home/home';
import { TestViewContainer } from '../views/testView/testContainer';
import { NotFoundView } from '../views/notFound/notFound';

import './App.css';

export const App = () => {
  return (
    <Router>
      <div data-testid="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">TestView with Saga</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/test" component={TestViewContainer} />
          <Route component={NotFoundView} />
        </Switch>
      </div>
    </Router>
  );
};
