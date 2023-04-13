import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

/**
 *  인증되지 않은 사용자에게 보여지는 레이아웃
 */

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="general-layout">
      <Header />
      <div className="general-layout__body">{children}</div>
    </div>
  );
};

export default UserLayout;
