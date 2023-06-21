import React from 'react';
import styled from 'styled-components';
import RecommendStretchingItem from './RecommendStretchingItem';
import PageTitle from '../PageTitle';
import { todos } from '../../data/todos';

const RecommendStretching = () => {
  return (
    <RecommendStrechingLayout>
      <PageTitle title="추천 스트레칭" />
      {todos.map((todo, index) => (
        <RecommendStretchingItem
          key={index}
          title={todo.title}
          linkUrl={todo.linkUrl}
          contents={todo.content}
          guideUrl={todo.guideUrl}
          isCheck={true}
        />
      ))}
    </RecommendStrechingLayout>
  );
};

export default RecommendStretching;

const RecommendStrechingLayout = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
