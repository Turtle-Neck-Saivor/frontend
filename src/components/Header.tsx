import React from 'react';
import styled from 'styled-components';
import logo from '../assets/turtle_logo.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * 상단 헤더 컴포넌트
 */

const Header = () => {
  return (
    <HeaderLayout>
      <Link to="/">
        <LogoContainer>
          <Image src={logo} />
          <Text>TurtleNeck</Text>
        </LogoContainer>
      </Link>
      <ButtonContainer>
        <Link to="/login">
          <Button variant="outlined">Sign-in</Button>
        </Link>
        <Link to="/signup">
          <Button variant="contained" sx={{ ml: 2 }}>
            Sign-up
          </Button>
        </Link>
      </ButtonContainer>
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

const LogoContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;
