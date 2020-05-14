import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import { Layout } from 'antd';
import {
  BREAKPOINT_MD,
  MIN_COLLAPSED_WIDTH_MOBILE,
  MAX_COLLAPSED_WIDTH_MOBILE
} from 'utils/constants';

import { HomeView } from 'views/home/home';
import { TestViewContainer } from 'views/testView/testContainer';
import { NotFoundView } from 'views/notFound/notFound';

import { AppHeader } from 'app/appHeader/appHeader';
import { Overlay } from 'components/overlay/overlay';
import { AppMenuItems } from './appMenuItems/appMenuItems';

import './app.scss';

export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <Router>
      <Layout className="rootLayout">
        <div data-testid="app">
          <Layout.Sider
            data-testid="sider"
            breakpoint={BREAKPOINT_MD}
            className="sider"
            trigger={null}
            defaultCollapsed
            collapsed={collapsed}
            collapsedWidth={
              /* istanbul ignore next */
              mobile ? MIN_COLLAPSED_WIDTH_MOBILE : MAX_COLLAPSED_WIDTH_MOBILE
            }
            onBreakpoint={
              /* istanbul ignore next */
              breakpoint => setMobile!(breakpoint)
            }
            onCollapse={
              /* istanbul ignore next */
              isCollapsed => setCollapsed(isCollapsed)
            }
          >
            <AppMenuItems
              mobile={mobile}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </Layout.Sider>
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
        </div>
      </Layout>
    </Router>
  );
};
