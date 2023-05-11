import * as h from '@mediapipe/holistic';

export interface DistanceMediapipe {
  standradInput: number;
  leyebrow: Coordinate;
  reyebrow: Coordinate;
  lshoulder: Coordinate;
  learlob: Coordinate;
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
