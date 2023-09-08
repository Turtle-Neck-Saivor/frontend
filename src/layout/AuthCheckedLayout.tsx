import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../stores';

/**
 *  사용자 인증이 필요한 페이지에게 보여지는 레이아웃
 */
const AuthCheckedLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const nickname = useSelector((state: RootState) => state.user.nickname);
 useEffect(() => {
    if (nickname === '') {
      navigate('/login');
    }
  }, [children]);

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
