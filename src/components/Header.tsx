import React from 'react';
import styled from 'styled-components';
import logo from '../assets/turtle_logo.png';

/**
 * 상단 헤더 컴포넌트
 */

const Header = () => {
  return (
    <HeaderLayout>
      <Image src={logo} />
      <Text>TurtleNeck</Text>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: start;
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid #c8cbd9;
`;

const Image = styled.img`
  display: flex;
  padding: 1rem;
  width: 2.1rem;
  margin-left: 1.5rem;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  color: #302f4d;
  font-weight: bold;
`;
