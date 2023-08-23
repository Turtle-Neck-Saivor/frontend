import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import store from '../stores';

/**
 *  사용자 인증이 필요한 페이지에게 보여지는 레이아웃
 *  TODO
 *  1. 렌더링 후 사용자 인증 검사 -> 안돼있으면 로그인으로 리다이렉트
 */

const AuthCheckedLayout = ({ children }: { children: React.ReactNode }) => {
  // const navigate = useNavigate();
  // const nickname = useSelector((state: RootState) => state.user.nickname);
  // useEffect(() => {
  //   if (!localStorage.getItem('nickname')) {
  //     navigate('/login');
  //   }
  // }, [children]);

  return (
    <RootLayout>
      <Header />
      <Content>
        <Sidebar />
        <Suspense fallback={<Loading />}>
          <LayoutBody>{children}</LayoutBody>
        </Suspense>
      </Content>
    </RootLayout>
  );
};

export default AuthCheckedLayout;

export const RootLayout = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
`;

const LayoutBody = styled.div``;
