import * as h from '@mediapipe/holistic';
import { Coordinate } from '../types/mediapipe';

/**
 * 사용자의 목길이 측정 알고리즘
 * 자세 보정을 위해 사용할 알고리즘
 * @param {number} leyebrow 왼쪽점
 * @param {number} secondPoint 오른쪽점의 좌표값
 * @returns mediapipe로 측정한 값을 cm 길이로 변환
 */
export const getDistance = (lCoordinate: Coordinate, rCoordinate: Coordinate) => {
  var dis_x = lCoordinate.x - rCoordinate.x;
  var dix_y = lCoordinate.y - rCoordinate.y;
  let dist = Math.sqrt(Math.abs(dis_x * dis_x) + Math.abs(dix_y * dix_y));
  return dist;
};

export const getVerticalDistance = (earloby: number, shouldery: number) => {
  return Math.abs(earloby - shouldery);
};
