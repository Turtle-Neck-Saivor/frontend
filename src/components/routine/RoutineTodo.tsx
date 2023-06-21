import React from 'react';
import styled from 'styled-components';
import Date from './Date';
import ProgressBar from './ProgressBar';
import TodoList from './TodoList';

const RoutineTodo = () => {
  return (
    <RoutineTodoLayout>
      <Date />
      <TodoTitle>TODO</TodoTitle>
      <ProgressBar />
      <TodoList />
    </RoutineTodoLayout>
  );
};

export default RoutineTodo;

const RoutineTodoLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-left: 3rem;
`;

const TodoTitle = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 1.9rem;
  color: #1f384c;
`;
