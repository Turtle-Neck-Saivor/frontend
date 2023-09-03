import React, { useEffect, useRef, useState } from 'react';
import type { Camera } from '@mediapipe/camera_utils';
import {
  drawConnectors as _drawConnectors,
  drawLandmarks as _drawLandmarks,
} from '@mediapipe/drawing_utils';
import { Camera as _Camera } from '@mediapipe/camera_utils';
import {
  Holistic as _Holistic,
  FACEMESH_LEFT_IRIS as _FACEMESH_LEFT_IRIS,
  FACEMESH_TESSELATION as _FACEMESH_TESSELATION,
  POSE_CONNECTIONS as _POSE_CONNECTIONS,
} from '@mediapipe/holistic';
import Webcam from 'react-webcam';
import { algorithm } from '../utils/algorithm';
import { useDispatch, useSelector } from 'react-redux';
import useNotification from './useNotification';
import { add } from '../stores/resultSlice';
import store, { RootState } from '../stores';
import { init, initing } from '../stores/cameraSlice';
import useInterval from './useInterval';
import { addCameraData } from '../stores/logSlice';
import { Coordinate } from '../types/mediapipe';
import { calculateAverageCoordinate } from '../utils/calculateAverageCoordinate';
import { sudoAlgorithm } from '../utils/sudoAlgorithm';

const STRETCHING_INTERVAL_TIME = 3600000;

const Holistic = _Holistic || (window as any).Holistic;
const FACEMESH_LEFT_IRIS =
  _FACEMESH_LEFT_IRIS || (window as any).FACEMESH_LEFT_IRIS;
const FACEMESH_TESSELATION =
  _FACEMESH_TESSELATION || (window as any).FACEMESH_TESSELATION;
const POSE_CONNECTIONS = _POSE_CONNECTIONS || (window as any).POSE_CONNECTIONS;
const drawConnectors = _drawConnectors || (window as any).drawConnectors;
const drawLandmarks = _drawLandmarks || (window as any).drawLandmarks;

const CameraModule = (window as any).Camera || _Camera;
let cameraInstance: Camera | null = null;
const useHolistic = ({
  videoRef,
}: {
  videoRef: React.RefObject<Webcam>;
  isDetect: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [resultTurtleNeck, setResultTurtleNeck] = useState('');
  const dispatch = useDispatch();
  const isIniting = useSelector((state: RootState) => {
    return state.camera.isIniting;
  });
  const [isDialog, setIsDialog] = useState(false);
  const [shoulderAngles, setShoulderAngles] = useState<number[]>([]);
  const [headAngles, setHeadAngles] = useState<number[]>([]);
  const [neckAngles, setNeckAngles] = useState<number[]>([]);
  const [redCount, setRedCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const nickname = useSelector((state: RootState) => state.user.nickname);
  const [shoulderAverage, setShoulderAverage] = useState(0);
  const [earlobAverage, setEarlobAverage] = useState(0);
  const [learlobData, setLearlobData] = useState([]);
  const [rearlobData, setRearlobData] = useState([]);
  const [lshoulderData, setLshoulderData] = useState([]);
  const [rshoulderData, setRshoulderData] = useState([]);
  const [isInitState, setIsInitState] = useState(false);
  const { fireNotificationWithTimeout } = useNotification();
  const isDetect = useSelector((state: RootState) => state.camera.isDetect);
  const onResults = (results) => {
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
      for (const point of FACEMESH_LEFT_IRIS) {
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
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_IRIS, {
      color: '#30FF30',
      lineWidth: 1,
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {
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
      let rearlob = faceResult[161];
      let lshoulder = poseResult['11'];
      let rshoulder = poseResult['12'];
      let leyebrow = poseResult['3'];
      let reyebrow = poseResult['6'];

      let resulttutrlte = algorithm({
        leyebrow: leyebrow,
        reyebrow: reyebrow,
        lshoulder: lshoulder,
        rshoulder: rshoulder,
        learlob: learlob,
        rearlob: rearlob,
        shoulderAverage: shoulderAverage,
        earlobAverage: earlobAverage,
      });

      let distanceFromWebcamInt = Math.floor(Number(distanceFromWebcam));

      if (isIniting && distanceFromWebcamInt === 40) {
        setLearlobData((cur) => [...cur, learlob]);
        setRearlobData((cur) => [...cur, rearlob]);
        setLshoulderData((cur) => [...cur, lshoulder]);
        setRshoulderData((cur) => [...cur, rshoulder]);
      }
      setResultTurtleNeck(resulttutrlte.result);

      if (resulttutrlte.result === 'RED') setRedCount((prev) => prev + 1);
      if (resulttutrlte.result === 'YELLOW') setYellowCount((prev) => prev + 1);
      if (resulttutrlte.result === 'GREEN') setGreenCount((prev) => prev + 1);
      dispatch(add(resulttutrlte.y));
    }
  };

  useEffect(() => {
    if (
      learlobData.length === 100 &&
      rearlobData.length === 100 &&
      lshoulderData.length === 100 &&
      rshoulderData.length === 100
    ) {
      const averageLeftEarlob = calculateAverageCoordinate(learlobData);
      const averageRightEarlob = calculateAverageCoordinate(rearlobData);
      const averageLeftShoulder = calculateAverageCoordinate(lshoulderData);
      const averageRightShoulder = calculateAverageCoordinate(rshoulderData);

      sudoAlgorithm({
        averageLeftEarlob,
        averageRightEarlob,
        averageLeftShoulder,
        averageRightShoulder,
      });

      store.dispatch(initing(false));
      setIsInitState(true);
      store.dispatch(init(true));
    }
  }, [learlobData, rearlobData, lshoulderData, rshoulderData]);

  useEffect(() => {
    if (resultTurtleNeck === 'RED' || resultTurtleNeck === 'YELLOW') {
      fireNotificationWithTimeout('🔔 거북목 경고 알림', {
        body: '자세를 바르게 해주세요',
      });
    }
  }, [resultTurtleNeck]);

  useInterval(() => {
    // const avgShoulderAngle = shoulderAngles.reduce((a, b) => a + b, 0) / shoulderAngles.length;
    // const avgHeadAngle = headAngles.reduce((a, b) => a + b, 0) / headAngles.length;
    // const aveNeckAngle = neckAngles.reduce((a, b) => a + b, 0) / neckAngles.length;
    dispatch(
      addCameraData({
        nickname: nickname,
        redCount: redCount,
        yellowCount: yellowCount,
        greenCount: greenCount,
        shoulderAngle: 1,
        headAngle: 1,
        neckAngle: 1,
        distanceMonitor: 1,
        // shoulderAngle: avgShoulderAngle,
        // headAngle: avgHeadAngle,
        // neckAngle: aveNeckAngle,
        // distanceMonitor: distanceFromWebcam,
      }),
    );

    // setShoulderAngles([]);
    // setHeadAngles([]);
    // setNeckAngles([]);
    setRedCount(0);
    setYellowCount(0);
    setGreenCount(0);
  }, 10000);

  useEffect(() => {
    let isCanceled = false;

    async function loadCameraModuleAndStart() {
      if (
        typeof videoRef.current !== 'undefined' &&
        videoRef.current !== null
      ) {
        if (!videoRef.current?.video) {
          return;
        }

        cameraInstance = new CameraModule(videoRef.current?.video, {
          onFrame: async () => {
            if (!videoRef.current?.video || isCanceled) {
              return;
            }
            await holistic.send({ image: videoRef.current?.video });
            setIsLoading(false);
          },
        });

        await cameraInstance.start();
      }
    }

    loadCameraModuleAndStart();

    return () => {
      isCanceled = true;
      holistic.onResults(() => undefined);
      cameraInstance?.stop();
    };
  }, [videoRef]);

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
      dispatch(add(0));
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
