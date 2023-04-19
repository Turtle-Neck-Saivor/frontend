import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo.png';

/**
 * 상단 헤더 컴포넌트
 */

const Header = () => {
  return (
    <HeaderLayout>
      <Image src={logo} />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid #c8cbd9;
  position: fixed;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  display: flex;
  padding: 1rem;
`;
