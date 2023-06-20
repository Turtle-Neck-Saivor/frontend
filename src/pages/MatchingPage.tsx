import React from 'react';
import styled from 'styled-components';
import MatchingTitle from '../components/matching/MatchingTitle';
import WarningResult from '../components/matching/WarningResult';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import MatchingMap from '../components/matching/MatchingMap';

const MatchingPage = () => {
  return (
    <MatchingPageLayout>
      <MatchingTitle />
      <WarningResult />
      <SubTitle>Medical institution</SubTitle>
      <MatchingMap keyword="정형외과" />
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
