import React from 'react';
import styled from 'styled-components';
import RecommendStretchingItem from './RecommendStretchingItem';
import PageTitle from '../PageTitle';

const RecommendStretching = () => {
  return (
    <RecommendStrechingLayout>
      <PageTitle title="추천 스트레칭" />
      <RecommendStretchingItem
        title="맥켄지운동"
        contents="허리 강화 운동"
        isCheck={true}
      />
    </RecommendStrechingLayout>
  );
};

export default RecommendStretching;

const RecommendStrechingLayout = styled.div`
  width: 100%;
`;
