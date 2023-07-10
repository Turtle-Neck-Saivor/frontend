import * as h from '@mediapipe/holistic';

export interface DistanceMediapipe {
  leyebrow: Coordinate;
  reyebrow: Coordinate;
  lshoulder: Coordinate;
  rshoulder: Coordinate;
  learlob: Coordinate;
  rearlob: Coordinate;
  shoulderAverage: number;
  earlobAverage: number;
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface MediapipeDataProps {
  poseLandmarks: h.NormalizedLandmarkList;
  faceLandmarks: h.NormalizedLandmarkList;
}