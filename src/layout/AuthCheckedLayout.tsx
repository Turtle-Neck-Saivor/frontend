import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

/**
 *  사용자 인증이 필요한 페이지에게 보여지는 레이아웃
 *  TODO
 *  1. 렌더링 후 사용자 인증 검사 -> 안돼있으면 로그인으로 리다이렉트
 */

const AuthCheckedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="authchecked-layout">
      <Header />
      <Sidebar />
      <div className="authchecked-layout__body">{children}</div>
    </div>
  );
};

export default AuthCheckedLayout;
