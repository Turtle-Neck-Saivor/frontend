import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Banner from '../assets/Banner.png';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FadeIn className="fadeIn" transitionDuration={600} delay={300}>
        <Image src={Banner} />

        <Typo>Do you have Tech Neck?</Typo>
        <TypoSub>
          간편하게 거북목을 진단할 수 있는 사이트를 찾고 계신가요?
          <br />
          매일 컴퓨터를 사용하는 당신의 목 건강 상태는 어떨까요? <br />
          TurtleNeck이 당신의 궁금증을 해결해드립니다!
        </TypoSub>
        <Link to="/camera">
          <Button variant="outlined" size="large" sx={{ width: 300 }}>
            거북목 판별 시작하기
          </Button>
        </Link>
      </FadeIn>
    </Container>
  );
};

export default HomePage;

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 427px;
`;

const Typo = styled.p`
  font-weight: 900;
  font-size: 3rem;
  color: #5c73db;
  margin: 0;
`;

const TypoSub = styled(Typo)`
  font-weight: 600;
  font-size: 1rem;
  color: #747474;
  text-align: center;
  margin: 1rem 0 2rem;
`;
