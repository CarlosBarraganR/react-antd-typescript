import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import { Layout } from 'antd';
import { HomeView } from 'views/home/home';
import { TestViewContainer } from 'views/testView/testContainer';
import { NotFoundView } from 'views/notFound/notFound';

import { AppHeader } from 'app/appHeader/appHeader';
import { Overlay } from 'components/overlay/overlay';

import './app.scss';
import { AppSider } from './appSider/appSider';

export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <Router>
      <Layout className="rootLayout" data-testid="app">
        <AppSider
          mobile={mobile}
          setMobile={setMobile}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Layout>
          <AppHeader
            mobile={mobile}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
          <Overlay
            active={!collapsed && mobile}
            onClick={
              /* istanbul ignore next */
              () => setCollapsed(!collapsed)
            }
          />
          <Layout.Content
            className={classNames({
              content: true,
              content_collapsed: collapsed,
              content_mobile: mobile
            })}
          >
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/test" component={TestViewContainer} />
              <Route component={NotFoundView} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};
