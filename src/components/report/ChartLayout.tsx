import React from 'react';
import styled from 'styled-components';

const ChartLayout = ({ children }: { children: React.ReactNode }) => {
  return <ChartPageLayout>{children}</ChartPageLayout>;
};

export default ChartLayout;

const ChartPageLayout = styled.div`
  display: flex;
  width: 16rem;
  height: 16rem;
  margin: 2rem;
  padding: 2rem 4rem 2rem 1.5rem;
  background-color: #f7f9fb;
  border-radius: 1rem;
  z-index: 0s;
`;
