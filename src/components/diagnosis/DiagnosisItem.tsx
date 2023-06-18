import React, { useState } from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import { SvgIcon } from '@mui/material';

const DiagnosisItem = ({ text }: { text: string }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <UnCheckItemLayout
      isCheck={isCheck}
      onClick={() => {
        setIsCheck((prev) => !prev);
      }}
    >
      <DiagnosisText isCheck={isCheck}>{text}</DiagnosisText>
      <SvgIcon
        component={DoneIcon}
        sx={{ color: `${isCheck ? '#5c73db' : '#9A9EA5'}` }}
      />
    </UnCheckItemLayout>
  );
};

export default DiagnosisItem;

const UnCheckItemLayout = styled.div<{ isCheck: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 2rem;
  background: #ffffff;
  border: 1px solid ${(props) => (props.isCheck ? '#5c73db' : '#e4e4e4')};
  padding: 1rem 1.5rem;
  border-radius: 5px;
  ${(props) =>
    props.isCheck ? 'box-shadow: 0px 4px 15px rgba(92, 115, 219, 0.25);' : ''};
  cursor: pointer;
`;

const DiagnosisText = styled.p<{ isCheck: boolean }>`
  display: flex;
  color: ${(props) => (props.isCheck ? '#5c73db' : '#242426')};
`;
