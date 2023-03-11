/**
 *
 * Navbar
 *
 */
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Layout, Button, Drawer } from 'antd';
import { NavStyle } from 'styles/nav-styles';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

interface Props {
  isLoggedInfo: any;
  children: any;
}

export const Navbar = memo(({ isLoggedInfo, children }: Props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  return (
    <Div>
      <NavStyle />
      <nav className="navbar">
        <Layout>
          <Layout.Header className="nav-header">
            <div className="logo">
              <h3 className="brand-font">Intuit Scheduler</h3>
            </div>
            <div className="navbar-menu">
              <div className="leftMenu">
                <LeftMenu mode={'horizontal'} />
              </div>
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <div className="rightMenu">
                <RightMenu mode={'horizontal'} isLoggedInfo={isLoggedInfo} />
              </div>

              <Drawer
                title={'Brand Here'}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode={'inline'} />
                <RightMenu mode={'inline'} isLoggedInfo={isLoggedInfo} />
              </Drawer>
            </div>
          </Layout.Header>
        </Layout>
      </nav>
      {children}
    </Div>
  );
});

const Div = styled.div``;
