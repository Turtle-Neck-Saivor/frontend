import React, { useEffect } from 'react';
import styled from 'styled-components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SidebarMenu from './SidebarMenu';
import SidebarInfo from './SidebarInfo';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../stores/userSlice';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(''));
    navigate('/login');
  };

  return (
    <SidebarLayout>
      <Wrapper>
        <SidebarInfo text="Menu" />
        <SidebarMenu icon={CameraAltIcon} link="camera" text="Camera" />
        <SidebarMenu icon={InsertChartIcon} link="report" text="Report" />
        <SidebarMenu icon={CalendarTodayIcon} link="routine" text="Calendar" />
        <SidebarInfo text="Others" />
        <SidebarMenu icon={SettingsIcon} link="settings" text="Settings" />
        <SidebarMenu
          icon={LogoutIcon}
          text="Logout"
          handleClick={handleLogout}
        />
      </Wrapper>
    </SidebarLayout>
  );
};

export default Sidebar;

const SidebarLayout = styled.div`
  align-items: flex-start;
  width: 18vw;
  min-height: 100vh;
  background-color: #e9ecfa;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin: 1.5rem 1.5rem;
`;
