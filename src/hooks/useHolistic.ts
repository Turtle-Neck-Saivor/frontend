import React, { useEffect, useRef, useState } from 'react';
import { Holistic, POSE_CONNECTIONS } from '@mediapipe/holistic';
import * as cam from '@mediapipe/camera_utils';
import * as h from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import Webcam from 'react-webcam';

interface MediapipeDataProps {
  poseLandmarks: h.NormalizedLandmarkList;
  faceLandmarks: h.NormalizedLandmarkList;
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
    const { poseLandmarks, faceLandmarks } = results;
    const data = {
      poseLandmarks,
      faceLandmarks,
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
    drawConnectors(canvasCtx, results.faceLandmarks, h.FACEMESH_TESSELATION, {
      color: '#C0C0C070',
      lineWidth: 1,
    });
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
