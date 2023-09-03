import { Coordinate } from "../types/mediapipe";

/**
 * 좌표 간의 유클리드 거리를 구하는 함수
 * @param {number} coordinate1 왼쪽점의 좌표값
 * @param {number} coordinate2 오른쪽점의 좌표값
 * @returns mediapipe로 측정한 유클리드 길이
 */
export const calculateEuclideanDistance = (coordinate1:Coordinate, coordinate2:Coordinate): number => {
    var dis_x = coordinate1.x - coordinate2.x;
    var dix_y = coordinate1.y - coordinate2.y;
    let dist = Math.sqrt(Math.abs(dis_x * dis_x) + Math.abs(dix_y * dix_y));
    return dist;
};
