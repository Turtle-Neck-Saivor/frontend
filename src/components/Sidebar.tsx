import React, { useEffect } from 'react';
import styled from 'styled-components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SidebarMenu from './SidebarMenu';
import SidebarInfo from './SidebarInfo';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarLayout>
      <Wrapper>
        <SidebarInfo text="Menu" />
        <SidebarMenu icon={CameraAltIcon} link="camera" text="Camera" />
        <SidebarMenu icon={InsertChartIcon} link="report" text="Report" />
        <SidebarInfo text="Others" />
        <SidebarMenu icon={SettingsIcon} link="settings" text="Settings" />
        <SidebarMenu icon={LogoutIcon} link="logout" text="Logout" />
      </Wrapper>
    </SidebarLayout>
  );
};

export default Sidebar;

const SidebarLayout = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #e9ecfa;
  position: fixed;
  top: 0;
  left: 0;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin: 5rem 1.3rem;
`;
