import React, { useCallback } from 'react';
import { Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { removeItem, clear } from 'utils/storage';
import history from 'utils/history';

const RightMenu = ({ mode, isLoggedInfo }) => {
  const handleClickOnLogout = useCallback(() => {
    removeItem('mybooks/userInfo');
    clear();
    history.push('/');
    window.location.reload();
  }, []);

  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">{isLoggedInfo?.firstName}</span>
          </>
        }
      >
        <Menu.Item key="log-out" onClick={handleClickOnLogout}>
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
