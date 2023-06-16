import React from 'react';
import styled from 'styled-components';

const ChartTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>;
};

export default ChartTitle;

const Title = styled.div`
  position: relative;
  margin-right: 0.5rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: rem;
  color: #595959;
  z-index: 3;
`;
