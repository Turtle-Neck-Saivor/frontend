import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Camera from '../components/camera/Camera';
import IsDetectButton from '../components/camera/IsDetectButton';

const CameraPage = () => {
  const [isDetect, setIsDetect] = useState(false);
  return (
    <>
      <PageTitle title="Camera" />
      <IsDetectButton isDetect={isDetect} setIsDetect={setIsDetect} />
      <Camera isDetect={isDetect} />
    </>
  );
};

export default CameraPage;
