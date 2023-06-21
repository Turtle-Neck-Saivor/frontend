import { LinearProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const ProgressBar = () => {
  return (
    <ProgressBarLayout>
      <PercentContainer>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          25,
        )}%`}</Typography>
      </PercentContainer>
      <ProgressContainer>
        <LinearProgress
          variant="determinate"
          sx={{ height: 23, borderRadius: 1 }}
          value={25}
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
