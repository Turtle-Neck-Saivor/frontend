import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Camera from '../components/camera/Camera';
import IsDetectButton from '../components/camera/IsDetectButton';
import ChartJSRealtime from '../components/report/ChartJSRealtime';

const CameraPage = () => {
  return (
    <>
      <PageTitle title="Camera" />
      <IsDetectButton />
      <Camera />
      <ChartJSRealtime />
    </>
  );
};

export default CameraPage;
