import React from 'react';
import styled from 'styled-components';
import { SvgIcon } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const AddRoutine = ({ isCheck }: { isCheck: boolean }) => {
  if (!isCheck) {
    return (
      <AddRoutineLayout>
        <SvgIcon
          component={AddCircleIcon}
          sx={{ color: '#3b3b3b', fontSize: 55, mt: 3.5 }}
        />
        <Explanation>루틴에 추가</Explanation>
      </AddRoutineLayout>
    );
  } else {
    return (
      <AddRoutineLayout>
        <SvgIcon
          component={TaskAltIcon}
          sx={{ color: '#3b3b3b', fontSize: 55, mt: 6.5 }}
        />
      </AddRoutineLayout>
    );
  }
};

export default AddRoutine;

const AddRoutineLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  width: 3.5rem;
  height: 10rem;
  margin: 2rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.17);
`;

const Explanation = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: #3b3b3b;
`;
