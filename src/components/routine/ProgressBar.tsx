import { LinearProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { RootState } from '../../stores';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const selectedDateTodos = useSelector(
    (state: RootState) => state.routine.todo,
  );

  return (
    <ProgressBarLayout>
      <PercentContainer>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          selectedDateTodos.rate,
        )}%`}</Typography>
      </PercentContainer>
      <ProgressContainer>
        <LinearProgress
          variant="determinate"
          sx={{ height: 23, borderRadius: 1 }}
          value={selectedDateTodos.rate}
        />
      </ProgressContainer>
    </ProgressBarLayout>
  );
};

export default ProgressBar;

const ProgressBarLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: 'center';
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin-top: 0.2rem;
  align-items: center;
`;

const PercentContainer = styled.div`
  display: flex;
  justify-content: end;
`;
