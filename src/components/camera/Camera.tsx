import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import * as io from 'socket.io-client';
import styled from 'styled-components';
import Guide from './Guide';
import Webcam from 'react-webcam';

/**
 *  camera 컴포넌트
 */

const Camera = () => {
  const socket = io.connect('');
  const [stream, setStream] = useState<MediaStream>();
  const videoRef = useRef<Webcam>(null);

  return (
    <VideoLayout>
      <Guide />
      <VideoBox>
        <Webcam
          audio={false}
          ref={videoRef}
          style={{ width: '100%', borderRadius: '1.5rem', margin: '0' }}
        ></Webcam>
      </VideoBox>
    </VideoLayout>
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
  margin-left: 11rem;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 70vw;
    margin: 0;
  }
  @media all and (max-width: 767px) {
    width: 80vw;
    margin: 0;
  }
`;
