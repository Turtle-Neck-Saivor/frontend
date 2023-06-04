import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import useHolistic from '../../hooks/useHolistic';
import { VideoLayout } from '../camera/Camera';

const Stretching = () => {
  const videoRef = useRef<Webcam>(null);

  return (
    <VideoLayout>
      <Webcam
        audio={false}
        ref={videoRef}
        style={{ width: '100%', borderRadius: '1.5rem', margin: '0' }}
      ></Webcam>
    </VideoLayout>
  );
};

export default Stretching;
