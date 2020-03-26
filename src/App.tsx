import React, { useEffect } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';

import './App.css';
import { axiosModule } from './api/axiosModule';

export const App = () => {
  useEffect(() => {
    axiosModule.$get(`eventos/publicBasicInfo`);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
};
