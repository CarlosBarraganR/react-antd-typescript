import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { ROUTES } from 'utils/routes/routes';
import { LayoutProps } from 'app/appTypes';

import logo from 'logo.svg';

import './appMenuItems.scss';

export const AppMenuItems = ({
  collapsed,
  setCollapsed,
  mobile
}: LayoutProps) => {
  const location = useLocation();

  return (
    <>
      <img src={logo} className="logo" alt="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        {ROUTES.map(({ name, path, RouteIcon }) => (
          <Menu.Item
            data-testid="menuItem"
            key={path}
            onClick={() => mobile && setCollapsed(!collapsed)}
          >
            <Link to={path}>
              <RouteIcon />
              <span>{name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};
