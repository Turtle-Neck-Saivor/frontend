import React from 'react';
import styled from 'styled-components';

const SidebarInfo = ({ text }: { text: string }) => {
  return <SidebarInfoLayout>{text}</SidebarInfoLayout>;
};

export default SidebarInfo;

const SidebarInfoLayout = styled.div`
  margin: 0;
  padding: 1rem 0 0.5rem 0.8rem;
  color: #08243160;
  font-size: 0.9rem;
`;
