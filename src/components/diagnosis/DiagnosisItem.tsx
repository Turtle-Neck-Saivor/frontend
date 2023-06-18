import React, { useState } from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import { SvgIcon } from '@mui/material';

const DiagnosisItem = () => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <UnCheckItemLayout
      isCheck
      onClick={() => {
        setIsCheck((prev) => !prev);
      }}
    >
      <SvgIcon component={DoneIcon} sx={{ color: '#9A9EA5' }} />
    </UnCheckItemLayout>
  );
};

export default DiagnosisItem;

const UnCheckItemLayout = styled.div<{ isCheck: boolean }>`
  width: 100%;
  height: 4rem;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckItemLayout = styled(UnCheckItemLayout)`
  box-shadow: 0px 4px 15px rgba(92, 115, 219, 0.25);
  border: 1px solid #5c73db;
  color: #5c73db;
`;

const DiagnosisText = styled.p`
  display: flex;
`;
