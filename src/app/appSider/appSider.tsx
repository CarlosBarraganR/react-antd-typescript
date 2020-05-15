import React from 'react';
import { LayoutProps } from 'app/appTypes';
import {
  BREAKPOINT_MD,
  MIN_COLLAPSED_WIDTH_MOBILE,
  MAX_COLLAPSED_WIDTH_MOBILE
} from 'utils/constants';
import { Layout } from 'antd';
import { AppMenuItems } from './appMenuItems/appMenuItems';

import './appSider.scss';

export const AppSider = ({
  mobile,
  setMobile,
  collapsed,
  setCollapsed
}: LayoutProps) => (
  <Layout.Sider
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
);
