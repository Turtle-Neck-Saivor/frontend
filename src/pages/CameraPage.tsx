import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Camera from '../components/camera/Camera';
import IsDetectButton from '../components/camera/IsDetectButton';

const CameraPage = () => {
  return (
    <>
      <PageTitle title="Camera" />
      <IsDetectButton />
      <Camera />
    </>
  );
};

export default CameraPage;
