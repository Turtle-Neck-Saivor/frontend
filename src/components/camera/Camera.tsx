import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import styled from 'styled-components';

const Camera = () => {
  const [stream, setStream] = useState<MediaStream>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
  };

  useEffect(() => {
    getUserCamera();
  }, []);

  useEffect(() => {}, []);
  return (
    <VideoLayout>
      <Video autoPlay ref={videoRef}></Video>
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

const Video = styled.video`
  width: 50vw;
  border-radius: 1.5rem;
  box-shadow: 1px 1px 10px lightgrey;
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
