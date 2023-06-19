import React, { useEffect, useRef, useState } from 'react';
import { Holistic, POSE_CONNECTIONS } from '@mediapipe/holistic';
import * as cam from '@mediapipe/camera_utils';
import * as h from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import Webcam from 'react-webcam';
import { algorithm } from '../utils/algorithm';
import { useDispatch, useSelector } from 'react-redux';
import useNotification from './useNotification';
import { add } from '../stores/resultSlice';
import store, { RootState } from '../stores';
import { init, initing } from '../stores/cameraSlice';
import { setAllCount, setRedCount, setYellowCount } from '../stores/logSlice';
import useInterval from './useInterval';

const STRETCHING_INTERVAL_TIME = 3600000;

const useHolistic = ({
  eyebrowWidth,
  videoRef,
}: {
  eyebrowWidth: number;
  videoRef: React.RefObject<Webcam>;
  isDetect: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [resultTurtleNeck, setResultTurtleNeck] = useState('');
  const dispach = useDispatch();
  const isIniting = useSelector((state: RootState) => {
    return state.camera.isIniting;
  });
  const [isDialog, setIsDialog] = useState(false);
  const [lshoulderData, setLshoulderData] = useState([0]);
  const [learlobData, setLearlobData] = useState([0]);
  const [isInitState, setIsInitState] = useState(false);
  const [shoulderAverage, setShoulderAverage] = useState(0);
  const [earlobAverage, setEarlobAverage] = useState(0);
  const { fireNotificationWithTimeout } = useNotification();
  const isDetect = useSelector((state: RootState) => state.camera.isDetect);
  const onResults: h.ResultsListener = (results) => {
    if (!canvasRef.current || !videoRef.current?.video || !isDetect) {
      return;
    }

    canvasRef.current.width = videoRef.current?.video.videoWidth;
    canvasRef.current.height = videoRef.current?.video.videoHeight;
    let width = results.image.width;
    let height = results.image.height;
    let irisLeftMinX = -1,
      irisLeftMaxX = -1;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext('2d');

    if (!canvasCtx) {
      return;
    }

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillStyle = '#00FF00';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.globalCompositeOperation = 'destination-atop';
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    );

    if (results.faceLandmarks) {
      for (const point of h.FACEMESH_LEFT_IRIS) {
        let point0 = results.faceLandmarks[point[0]];
        if (irisLeftMinX == -1 || point0.x * width < irisLeftMinX) {
          irisLeftMinX = point0.x * width;
        }
        if (irisLeftMaxX == -1 || point0.x * width > irisLeftMaxX) {
          irisLeftMaxX = point0.x * width;
        }
      }
    }
    canvasCtx.globalCompositeOperation = 'source-over';
    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 3,
    });
    drawLandmarks(canvasCtx, results.poseLandmarks, {
      color: '#FF0000',
      lineWidth: 2,
    });
    drawConnectors(canvasCtx, results.faceLandmarks, h.FACEMESH_LEFT_IRIS, {
      color: '#30FF30',
      lineWidth: 1,
    });
    drawConnectors(canvasCtx, results.faceLandmarks, h.FACEMESH_TESSELATION, {
      color: '#C0C0C070',
      lineWidth: 1,
    });
    let dx = irisLeftMaxX - irisLeftMinX;
    let dX = 11.7;
    // Logitech HD Pro C922 Norm focal
    let normalizedFocaleX = 1;

    let fx = Math.min(width, height) * normalizedFocaleX;
    let dZ = (fx * (dX / dx)) / 10.0;
    let distanceFromWebcam = dZ.toFixed(2);

    canvasCtx.fillStyle = 'red';
    canvasCtx.font = '30px Arial';
    canvasCtx.fillText(distanceFromWebcam + ' cm', width / 2, 50);

    let faceResult = results.faceLandmarks;
    let poseResult = results.poseLandmarks;

    if (faceResult) {
      let learlob = faceResult['132'];
      let lshoulder = poseResult['11'];
      let leyebrow = poseResult['3'];
      let reyebrow = poseResult['6'];

      let resulttutrlte = algorithm({
        standradInput: eyebrowWidth,
        leyebrow: leyebrow,
        reyebrow: reyebrow,
        lshoulder: lshoulder,
        learlob: learlob,
        shoulderAverage: shoulderAverage,
        earlobAverage: earlobAverage,
      });
      if (isIniting) {
        setLshoulderData((cur) => {
          const temp = [...cur];
          temp.push(lshoulder.y);
          return temp;
        });
        setLearlobData((cur) => {
          const temp = [...cur];
          temp.push(learlob.y);
          return temp;
        });
      }
      setResultTurtleNeck(resulttutrlte.result);
      dispach(setAllCount(false));
      if (resulttutrlte.result === 'RED') dispach(setRedCount(false));
      if (resulttutrlte.result === 'YELLOW') dispach(setYellowCount(false));
      dispach(add(resulttutrlte.y));
    }
  };

  useEffect(() => {
    if (resultTurtleNeck === 'RED' || resultTurtleNeck === 'YELLOW') {
      fireNotificationWithTimeout('🔔 거북목 경고 알림', {
        body: '자세를 바르게 해주세요',
      });
    }
  }, [resultTurtleNeck]);

  useEffect(() => {
    if (lshoulderData.length === 50) {
      store.dispatch(initing(false));
      const shoulderSum = lshoulderData.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      const earlobSum = learlobData.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      setShoulderAverage(shoulderSum / lshoulderData.length);
      setEarlobAverage(earlobSum / learlobData.length);
      setIsInitState(true);
      store.dispatch(init(true));
    }
  }, [lshoulderData, learlobData]);

  useEffect(() => {
    let camera: cam.Camera | null = null;
    let isCanceled = false;

    if (typeof videoRef.current !== 'undefined' && videoRef.current !== null) {
      if (!videoRef.current?.video) {
        return;
      }

      camera = new cam.Camera(videoRef.current?.video, {
        onFrame: async () => {
          if (!videoRef.current?.video || isCanceled) {
            return;
          }
          await holistic.send({ image: videoRef.current?.video });
          setIsLoading(false);
        },
      });
      camera.start();
    }
    return () => {
      isCanceled = true;
      holistic.onResults(() => undefined);
      camera?.stop();
    };
  }, []);

  useInterval(() => {
    fireNotificationWithTimeout('🐢 스트레칭 알림 🐢', {
      body: '컴퓨터를 한지 1시간이 경과했습니다. 웹사이트로 돌아와서 스트레칭을 진행해주세요.',
    });
    setIsDialog(true);
  }, STRETCHING_INTERVAL_TIME);

  useEffect(() => {
    if (isDetect) {
      holistic.onResults(onResults);
    } else {
      holistic.onResults(() => undefined);
      dispach(add(0));
    }
  }, [isDetect, isInitState]);

  return {
    resultTurtleNeck,
    canvasRef,
    isLoading,
    isDialog,
    setIsDialog,
  };
};

const holistic = new Holistic({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
  },
});
holistic.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
  enableFaceGeometry: false,
  refineFaceLandmarks: true,
});

export default useHolistic;
