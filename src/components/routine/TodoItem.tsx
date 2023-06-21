import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import TodoButton from './TodoButton';
import TodoTitle from './TodoTitle';

interface Props {
  title: string;
  linkUrl: string;
  guideUrl: string;
  handleCheck: (e) => void;
  isCheck: boolean;
}

const TodoItem = ({
  title,
  linkUrl,
  guideUrl,
  handleCheck,
  isCheck,
}: Props) => {
  const handleChange = (e) => {
    handleCheck(e);
  };

  return (
    <TodoItemLayout>
      <CheckBoxContainer>
        <Checkbox checked={isCheck} onChange={handleChange} />
      </CheckBoxContainer>
      <TodoItemBox isCheck={isCheck}>
        <TodoTitle isCheck={isCheck} title={title} />
        <TodoButton linkUrl={linkUrl} guideUrl={guideUrl} />
      </TodoItemBox>
    </TodoItemLayout>
  );
};

export default TodoItem;

const TodoItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`;
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoItemBox = styled.div<{ isCheck: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 5rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 2.75px 9px rgba(0, 0, 0, 0.19);
  border-radius: 0.7rem;
  opacity: ${(props) => (props.isCheck ? '0.4' : '1')};
`;
