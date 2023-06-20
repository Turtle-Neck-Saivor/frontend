import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MatchingTitle from '../components/matching/MatchingTitle';
import WarningResult from '../components/matching/DiscResult';
import MapContainer from '../components/matching/MapContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import TurtleResult from '../components/matching/TurtleResult';
import DiscResult from '../components/matching/DiscResult';
import { clearItem } from '../stores/diagnosisSlice';
import { useLocation } from 'react-router-dom';

const MatchingPage = () => {
  let { state } = useLocation();
  if (!state) {
    state = { isDisc: false };
  }

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearItem);
    };
  }, []);

  return (
    <MatchingPageLayout>
      <MatchingTitle />
      {state.isDisc ? <DiscResult /> : <TurtleResult />}
      <SubTitle>Medical institution</SubTitle>
      <MapContainer keyword={state.isDisc ? '목디스크' : '정형외과'} />
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
