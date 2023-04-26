import React, { useCallback, useEffect, useState } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import styled, { css } from 'styled-components';
import { SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/**
 * 사이드바 메뉴 아이템
 * [아이템 클릭시 해당 아이템 색상 변경 로직]
 *   1. useLocation에서 현재위치 불러오기, isSelect 초기는 false
 *   2. 현재위치('/location') 경로와 `/${link}`가 같다면 isSelect true로 변경, 아니라면 false
 *   3. isSelect가 true일 경우 style 변경 유지
 */

interface SelectProps {
  select: boolean;
}

interface SidebarMenuProps {
  icon: SvgIconComponent;
  text: string;
  link?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SidebarMenu = ({ icon, text, link, handleClick }: SidebarMenuProps) => {
  const location = useLocation();
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    if (location.pathname === `/${link}`) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [location.pathname]);
  return (
    <Link to={`/${link}`}>
      <MenuLayout select={isSelect}>
        <SvgIcon component={icon} />
        <Text>{text}</Text>
      </MenuLayout>
    </Link>
  );
};

export default SidebarMenu;

const Text = styled.div`
  color: #27324090;
  margin-left: 0.8rem;
`;

const Select = {
  select: () => `
      color: #5a6acf;
      background-color: #707fdd30;
      ${Text} {
        color: #5a6acf;
      }
    `,
};

const MenuLayout = styled.div<SelectProps>`
  display: flex;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  color: #27324090;
  font-size: 1rem;
  ${(props) =>
    props.select &&
    css`
      ${Select.select()}
    `}
  &:hover {
    ${Select.select()}
  }
`;
