import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import styled from 'styled-components';

interface Props {
  bgColor: string;
  textColor: string;
  icon: SvgIconComponent;
  title: string;
  fontSize?: string;
  padding?: string;
  onClick?: () => void;
}

const IconButton = ({
  bgColor,
  textColor,
  icon,
  title,
  fontSize,
  padding,
  onClick,
}: Props) => {
  return (
    <InfoButtonLayout
      onClick={onClick}
      bgColor={bgColor}
      fontSize={fontSize}
      padding={padding}
    >
      <SvgIcon component={icon} sx={{ color: `${textColor}` }} />
      <ButtonTitle textColor={textColor}>{title}</ButtonTitle>
    </InfoButtonLayout>
  );
};

export default IconButton;

const InfoButtonLayout = styled.button<{
  bgColor: string;
  fontSize: string;
  padding: string;
}>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  box-shadow: 1px 2px 5px rgba(20, 14, 62, 0.2);
  font-size: ${(props) => props.fontSize};
  height: min-content;
  padding: ${(props) => props.padding} 0.7rem;
`;

const ButtonTitle = styled.div<{ textColor: string }>`
  margin-left: 0.5rem;
  color: ${(props) => props.textColor};
  font-weight: 700;
`;
