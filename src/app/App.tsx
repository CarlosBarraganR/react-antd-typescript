import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeView } from 'views/home/home';
import { TestViewContainer } from 'views/testView/testContainer';
import { NotFoundView } from 'views/notFound/notFound';
import logo from 'logo.svg';

import './App.css';

export const App = () => {
  return (
    <Router>
      <div data-testid="app">
        <Layout.Header>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/test">TestView with Saga</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/test" component={TestViewContainer} />
          <Route component={NotFoundView} />
        </Switch>
      </div>
    </Router>
  );
};
