import React, { useEffect, useRef, useState } from 'react';
import { Holistic, POSE_CONNECTIONS } from '@mediapipe/holistic';
import * as cam from '@mediapipe/camera_utils';
import * as h from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import Webcam from 'react-webcam';

interface MediapipeDataProps {
  poseLandmarks: h.NormalizedLandmarkList;
  faceLandmarks: h.NormalizedLandmarkList;
  rightHandLandmarks: h.NormalizedLandmarkList;
}

const getDistance = ( ax: number, ay: number, zx: number, zy: number ) => {

  var dis_x = ax - zx;

  var dix_y = ay - zy;

  let dist = Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dix_y * dix_y ) );

  return dist;
}

const useHolistic = ({
  videoRef,
  isDetect,
}: {
  videoRef: React.RefObject<Webcam>;
  isDetect: boolean;
}) => {
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
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
    enableFaceGeometry: true,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mediapipeData, setMediapipeData] = useState<MediapipeDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onResults: h.ResultsListener = (results) => {
    if (!canvasRef.current || !videoRef.current?.video || !isDetect) {
      return;
    }
    const { poseLandmarks, faceLandmarks, rightHandLandmarks } = results;
    const data = {
      poseLandmarks,
      faceLandmarks,
      rightHandLandmarks,
    };
    setMediapipeData((cur) => {
      const temp = [...cur];
      temp.push(data);
      return temp;
    });

    canvasRef.current.width = videoRef.current?.video.videoWidth;
    canvasRef.current.height = videoRef.current?.video.videoHeight;

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
    canvasCtx.globalCompositeOperation = 'source-over';

    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 3,
    });
    drawLandmarks(canvasCtx, results.poseLandmarks, {
      color: '#FF0000',
      lineWidth: 2,
    });
    drawConnectors(canvasCtx, results.leftHandLandmarks, h.HAND_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 3,
    });

    drawConnectors(canvasCtx, results.faceLandmarks, h.FACEMESH_TESSELATION, {
      color: '#C0C0C070',
      lineWidth: 1,
    });

    let value = results.leftHandLandmarks
    let ax = value['4'].x;
    let ay = value['4'].y;
    let zx = value['20'].x;
    let zy = value['20'].y;
    let dist_1 = getDistance(ax, ay, zx, zy)

    let value_2 = results.faceLandmarks
    let bx = value_2['132'].x;
    let by = value_2['132'].y;
    let wx = value_2['361'].x;
    let wy = value_2['361'].y;
    let dist_2 = getDistance(bx, by, wx, wy);
    let real_dist = (18.5) * (dist_2 / dist_1);
    console.log(real_dist);
    // if(value < -1){
    //   console.log(`${value} < -1`)
    // } else if (value < 0 && value> -1){
    //   console.log(`-1 < ${value} < 0`)
    // } else if (value == 0 ){
    //   console.log(`${value} = 0`)
    // } else if (value < 1 && value > 0){
    //   console.log(`0 < ${value} < 1`)
    // }else if (value > 1){
    //   console.log(`1 < ${value}`)
    // }

  };


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

  useEffect(() => {
    if (isDetect) {
      holistic.onResults(onResults);
    } else {
      holistic.onResults(() => undefined);
      setMediapipeData([]);
    }
  }, [isDetect]);

  return {
    canvasRef,
    isLoading,
  };
};

export default useHolistic;
