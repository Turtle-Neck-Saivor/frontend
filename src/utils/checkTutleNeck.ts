/**
 * mediapipe를 통해 측정한 y값(실수)와 사용자의 양쪽 눈의 끝과 끝 사이의 거리 k(cm)를 이용하여 거북목 여부 판단 함수
 * @param {number} y 사용자의 귓볼과 어깨선 사이의 수직 거리 (cm)
 * @param {number} k 사용자가 올바른 자세일 때 측정한 y값 (cm)
 * @returns
 */

import store from '../stores';
import { criticalPointRed, criticalPointYellow } from '../stores/resultSlice';

export const checkTurtleNeck = (y: number, k: number): string => {
  const RED_STATUS_DEGREE = 50;
  const YELLOW_STATUS_DEGREE = 15;
  const redRadian = (RED_STATUS_DEGREE * Math.PI) / 180;
  const yellowRadian = (YELLOW_STATUS_DEGREE * Math.PI) / 180;

  const criticalPoint2 = Math.sin(redRadian) * k; // yellow
  const criticalPoint1 = Math.sin(yellowRadian) * k; // red
  store.dispatch(criticalPointRed(criticalPoint1));
  store.dispatch(criticalPointYellow(criticalPoint2));

  if (0 < y && y < criticalPoint2) {
    return 'RED';
  } else if (criticalPoint2 < y && y < criticalPoint1) {
    return 'YELLOW';
  } else if (criticalPoint2 < y) {
    return 'GREEN';
  } else {
    return 'ERROR';
  }
};
