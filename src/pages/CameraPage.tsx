import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Camera from '../components/camera/Camera';
import IsDetectButton from '../components/camera/IsDetectButton';
import ChartJSRealtime from '../components/report/ChartJSRealtime';
import styled from 'styled-components';

const CameraPage = () => {
  return (
    <>
      <PageTitle title="Camera" />
      <IsDetectButton />
      <Camera />
      {localStorage.getItem('criticalPoint') ? (
        <ChartBox>
          <ChartJSRealtime />
        </ChartBox>
      ) : null}
    </>
  );
};

export default CameraPage;

const ChartBox = styled.div`
  margin-left: 4rem;
`;
