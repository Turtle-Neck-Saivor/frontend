import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckDateTodos } from '../../stores/routineSlice';
import { todos } from '../../data/todos';
import { RootState } from '../../stores';

const TodoList = () => {
  const dispatch = useDispatch();
  const selectedDateTodos = useSelector(
    (state: RootState) => state.routine.todo,
  );

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
          isCheck={selectedDateTodos.checkedStates[index]}
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
