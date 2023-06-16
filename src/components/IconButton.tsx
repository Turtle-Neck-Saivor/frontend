import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import styled from 'styled-components';

interface Props {
  bgColor: string;
  textColor: string;
  icon: SvgIconComponent;
  title: string;
}

const IconButton = ({ bgColor, textColor, icon, title }: Props) => {
  return (
    <InfoButtonLayout bgColor={bgColor}>
      <SvgIcon component={icon} sx={{ color: `${textColor}` }} />
      <ButtonTitle textColor={textColor}>{title}</ButtonTitle>
    </InfoButtonLayout>
  );
};

export default IconButton;

const InfoButtonLayout = styled.button<{ bgColor: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  box-shadow: 1px 2px 5px rgba(20, 14, 62, 0.2);
`;

const ButtonTitle = styled.div<{ textColor: string }>`
  margin-left: 0.5rem;
  color: ${(props) => props.textColor};
  font-weight: 700;
`;
