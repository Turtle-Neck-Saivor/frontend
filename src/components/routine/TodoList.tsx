import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { setCheckDateTodos } from '../../stores/routineSlice';
import { todos } from './todos';

const TodoList = () => {
  const dispatch = useDispatch();

  const handleCheck = (index) => (e) => {
    dispatch(setCheckDateTodos({ index, checked: e.target.checked }));
  };

  return (
    <TodoListLayout>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          title={todo.title}
          linkUrl={todo.linkUrl}
          guideUrl={todo.guideUrl}
          handleCheck={handleCheck(index)}
        />
      ))}
    </TodoListLayout>
  );
};

export default TodoList;

const TodoListLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
