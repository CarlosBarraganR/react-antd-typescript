import React from 'react';
import classNames from 'classnames';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { LayoutProps } from 'app/appTypes';

import './appHeader.scss';

export const AppHeader = ({ collapsed, mobile, setCollapsed }: LayoutProps) => (
  <Layout.Header
    className={classNames({
      header: true,
      header_collapsed: collapsed,
      header_mobile: mobile,
      header_collapsed_and_mobile: !collapsed && mobile
    })}
  >
    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: () => setCollapsed(!collapsed)
    })}
  </Layout.Header>
);
