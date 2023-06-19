import React from 'react';
import PageTitle from '../PageTitle';
import { Button } from '@mui/material';
import styled from 'styled-components';

interface Props {
  setIsDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
const ReportTitle = ({ setIsDialog }: Props) => {
  return (
    <TitleContainer>
      <PageTitle title="Report" />
      <ButtonLayout>
        <Button
          variant="contained"
          sx={{ height: '2rem', background: '#5C73DB' }}
          onClick={() => setIsDialog(true)}
        >
          자가진단
        </Button>
      </ButtonLayout>
    </TitleContainer>
  );
};

export default ReportTitle;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 2.5rem 0 0;
`;
