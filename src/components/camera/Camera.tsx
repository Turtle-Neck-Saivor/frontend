import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import useHolistic from '../../hooks/useHolistic';
import Loading from '../Loading';

/**
 *  camera 컴포넌트
 */

const Camera = ({ isDetect }: { isDetect: boolean }) => {
  const videoRef = useRef<Webcam>(null);

  const { canvasRef, isLoading } = useHolistic({
    eyebrowWidth: 8,
    videoRef: videoRef,
    isDetect: true,
  });

  return (
    <>
      {isLoading && <Loading />}
      <VideoLayout>
        <VideoBox>
          {isDetect ? <Canvas ref={canvasRef} /> : <></>}
          <Webcam
            audio={false}
            ref={videoRef}
            style={{ width: '100%', borderRadius: '1.5rem', margin: '0' }}
          ></Webcam>
        </VideoBox>
      </VideoLayout>
    </>
  );
};

export default Camera;

const VideoLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 3rem 0 0 2rem;
`;

const VideoBox = styled.div`
  width: 50vw;
  border-radius: 1.5rem;
  margin-left: 9rem;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 70vw;
    margin: 0;
  }
  @media all and (max-width: 767px) {
    width: 80vw;
    margin: 0;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  border-radius: 1.5rem;
  z-index: 9;
  width: 50vw;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 70vw;
    margin: 0;
  }
  @media all and (max-width: 767px) {
    width: 80vw;
    margin: 0;
  }
`;
