import React from 'react';
import styled from 'styled-components';

interface Props {
  isCheck: boolean;
  title: string;
}

const TodoTitle = ({ isCheck, title }: Props) => {
  return (
    <TitleContainer>
      {isCheck ? (
        <Complete>Completed</Complete>
      ) : (
        <NotComplete>Not Completed</NotComplete>
      )}
      <Title>{title}</Title>
    </TitleContainer>
  );
};

export default TodoTitle;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.3rem;
  color: black;
  margin: 0;
`;

const NotComplete = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 0.9rem;
  color: #1f384c;
`;

const Complete = styled(NotComplete)`
  color: #1dc9a0;
`;
