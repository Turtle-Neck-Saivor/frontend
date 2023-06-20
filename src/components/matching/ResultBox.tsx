import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color: string;
}

const ResultBox = ({ children, color }: Props) => {
  return (
    <ResultLayout>
      <ResultContainer>
        <ResultText color={color}>{children}</ResultText>
      </ResultContainer>
    </ResultLayout>
  );
};

export default ResultBox;

const ResultLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const ResultContainer = styled.div`
  width: 93%;
  padding: 0.8rem 0;
  background-color: white;
  box-shadow: 3px 3px 15px rgba(50, 50, 71, 0.2);
  border-radius: 0.8rem;
`;

const ResultText = styled.p<{ color: string }>`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.color};
`;
