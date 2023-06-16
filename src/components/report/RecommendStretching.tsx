import React from 'react';
import PageTitle from '../PageTitle';
import styled from 'styled-components';
import StretchingInfo from './StretchingInfo';
import AddRoutine from './AddRoutine';

const RecommendStretching = () => {
  return (
    <RecommendStrechingLayout>
      <PageTitle title="추천 스트레칭" />
      <StrechingContainer>
        <StretchingInfo />
        <AddRoutine isCheck={false} />
      </StrechingContainer>
      <StrechingContainer>
        <StretchingInfo />
        <AddRoutine isCheck={true} />
      </StrechingContainer>
    </RecommendStrechingLayout>
  );
};

export default RecommendStretching;

const RecommendStrechingLayout = styled.div`
  width: 100%;
`;

const StrechingContainer = styled.div`
  display: flex;
  width: 100%;
`;