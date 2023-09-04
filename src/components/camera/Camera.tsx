import React, { useRef } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import useHolistic from '../../hooks/useHolistic';
import Loading from '../Loading';
import StateButton from './StateButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import AlertDialog from '../AlertDialog';
import { useNavigate } from 'react-router-dom';

/**
 *  camera 컴포넌트
 */

const Camera = () => {
  const navigate = useNavigate();
  const videoRef = useRef<Webcam>(null);
  const isDetect = useSelector((state: RootState) => state.camera.isDetect);
  const isIniting = useSelector((state: RootState) => state.camera.isIniting);

  const { resultTurtleNeck, canvasRef, isLoading, isDialog, setIsDialog } =
    useHolistic({
      videoRef: videoRef,
      isDetect: isDetect,
    });

  return (
    <>
      {isLoading && <Loading />}
      <AlertDialog
        isDialog={isDialog}
        setIsDialog={setIsDialog}
        title="스트레칭하러 가기"
        description="컴퓨터 사용 1시간이 경과하였습니다. 스트레칭을 진행해주세요"
        handleAgree={() => {
          navigate('/routine');
        }}
      />
      <VideoLayout>
        <StateButton resultTurtleNeck={resultTurtleNeck} />
        <VideoBox>
          {isDetect ? <Canvas ref={canvasRef} /> : null}

          {isIniting ? (
            <InitLayout>
              <Text>
                자세 등록중입니다. 모니터와 40cm 간격으로 바른 자세를
                유지해주세요
              </Text>
            </InitLayout>
          ) : (
            <></>
          )}
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
  margin-top: 3rem;
`;

const VideoBox = styled.div`
  width: 45vw;
  border-radius: 1.5rem;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 40vw;
    margin: 0;
  }
  @media all and (max-width: 767px) {
    width: 70vw;
    margin: 0;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  border-radius: 1.5rem;
  z-index: 9;
  width: 45vw;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 40vw;
    margin: 0;
  }
  @media all and (max-width: 767px) {
    width: 70vw;
    margin: 0;
  }
`;

const InitLayout = styled(VideoBox)`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const Text = styled.h3`
  margin-top: 3rem;
  background-color: white;
  width: 62%;
  padding: 0.5rem 1rem;
  color: black;
`;
