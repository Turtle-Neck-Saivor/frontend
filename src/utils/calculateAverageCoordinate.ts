import { Coordinate } from '../types/mediapipe';

export const calculateAverageCoordinate = (
  coordinates: Coordinate[],
): Coordinate => {
  const totalCoordinates = coordinates.length;

  if (totalCoordinates === 0) return { x: 0, y: 0 };

  let totalX = 0;
  let totalY = 0;
  for (let coordinate of coordinates) {
    totalX += coordinate.x;
    totalY += coordinate.y;
  }

  const avgX = totalX / totalCoordinates;
  const avgY = totalY / totalCoordinates;

  return { x: avgX, y: avgY };
};
