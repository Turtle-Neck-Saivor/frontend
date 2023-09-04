import { calculateEuclideanDistance } from './calculateDistance';
import { calculateMidPoint } from './calculatePoint';

export const calculateDistancePosture = ({
  leftEar,
  rightEar,
  leftShoulder,
  rightShoulder,
}) => {
  const midEarlob = calculateMidPoint(leftEar, rightEar);
  const midShoulder = calculateMidPoint(leftShoulder, rightShoulder);
  const distanceAboutRightPosture = calculateEuclideanDistance(
    midEarlob,
    midShoulder,
  );
  return distanceAboutRightPosture;
};
