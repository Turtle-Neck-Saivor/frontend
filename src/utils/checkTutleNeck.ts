/**
 * mediapipe를 통해 측정한 y값(실수)와 사용자의 양쪽 눈의 끝과 끝 사이의 거리 k(cm)를 이용하여 거북목 여부 판단 함수
 * @param {number} y 사용자의 귓볼과 어깨선 사이의 수직 거리 (cm)
 * @param {number} k 사용자가 올바른 자세일 때 측정한 y값 (cm)
 * @returns
 */

export const checkTurtleNeck = (y: number, k: number): string => {
  const STANDARD_DEGREE = 50;
  const radian = (STANDARD_DEGREE * Math.PI) / 180;
  const m = 9;
  const n = 1;

  const criticalPoint2 = Math.sin(radian) * k; // yellow
  const criticalPoint1 = (k * m + criticalPoint2 * n) / (m + n); // red
  localStorage.setItem(
    'criticalPoint',
    JSON.stringify({ red: criticalPoint1, yellow: criticalPoint2 }),
  );

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
