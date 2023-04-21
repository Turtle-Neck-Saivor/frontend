import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ title }: { title: string }) => {
  return (
    <PageTitleLayout>
      <Title>{title}</Title>
    </PageTitleLayout>
  );
};

export default PageTitle;

const PageTitleLayout = styled.div`
  margin: 1rem;
`;

const Title = styled.div`
  color: #1f384c;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 2rem 0;
`;
