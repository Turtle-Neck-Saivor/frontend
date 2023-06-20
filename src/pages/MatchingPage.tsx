import React from 'react';
import styled from 'styled-components';
import MatchingTitle from '../components/matching/MatchingTitle';
import WarningResult from '../components/matching/WarningResult';
import MapContainer from '../components/matching/MapContainer';

const MatchingPage = () => {
  return (
    <MatchingPageLayout>
      <MatchingTitle />
      <WarningResult />
      <SubTitle>Medical institution</SubTitle>
      <MapContainer />
    </MatchingPageLayout>
  );
};

export default MatchingPage;

const MatchingPageLayout = styled.div`
  width: 77vw;
  padding: 0 1.5rem;
`;

const SubTitle = styled.p`
  margin: 2.5rem 2rem 0 3.2rem;
  color: #1f384c;
  font-size: 1.35rem;
  font-weight: 500;
`;
