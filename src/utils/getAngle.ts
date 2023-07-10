import { Coordinate } from "../types/mediapipe";

/**
 * 어깨선 기울어진 각도 측정
 * @param {number} lShoulder 왼쪽 어깨 Coordinate
 * @param {number} rShoulder 오른쪽 어깨 Coordinate
 * @returns mediapipe로 측정한 각도를 radian 단위로 반환
 */
export const getShoulderAngle = (lShoulder: Coordinate, rShoulder: Coordinate): number => {
    const width = Math.abs(lShoulder.x - rShoulder.x);
    const height = Math.abs(lShoulder.y - rShoulder.y);
    return Math.atan(height/width);
}

/**
 * 귓볼선 기울어진 각도 측정
 * @param {number} lEarlob 왼쪽 귓볼 Coordinate
 * @param {number} rEarlob 오른쪽 귓볼 Coordinate
 * @returns mediapipe로 측정한 각도를 radian 단위로 반환
 */
export const getHeadAngle = (lEarlob: Coordinate, rEarlob: Coordinate): number => {
    const width = Math.abs(lEarlob.x - rEarlob.x);
    const height = Math.abs(lEarlob.y - rEarlob.y);
    return Math.atan(height/width);
}

/**
 * 목이 기울진 각도 측정
 * @param {number} leftPoint 왼쪽점의 좌표값
 * @param {number} rightPoint 오른쪽점의 좌표값
 * @returns mediapipe로 측정한 값을 cm 길이로 변환
 */
export const getNeckAngle = (midPointEarlobData: Coordinate, midPointShoulderData: Coordinate): number => {
    const width = Math.abs(midPointEarlobData.x - midPointShoulderData.x);
    const height = Math.abs(midPointEarlobData.y - midPointShoulderData.y);
    return Math.atan(width/height);
}