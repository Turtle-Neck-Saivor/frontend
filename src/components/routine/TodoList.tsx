import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <TodoListLayout>
      <TodoItem
        title="맥켄지운동"
        linkUrl="https://www.youtube.com/watch?v=EUXBR9RJ8PI"
        guideUrl="/"
      />
    </TodoListLayout>
  );
};

export default TodoList;

const TodoListLayout = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;
