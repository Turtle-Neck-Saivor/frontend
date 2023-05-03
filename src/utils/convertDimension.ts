/**
 * mediapipe를 통해 얻은 특징점 간의 사이의 거리를 cm 단위로 변환해주는 함수
 * @param {number} value mediapipe를 통해서 측정한 길이
 * @param {number} cmDistance pose landmarks의 3번과 6번 거리의 cm 단위
 * @param {number} mediapipeDistance pose landmarks의 3번과 6번 거리의 좌표 사이의 거리
 * @returns mediapipe로 측정한 값을 cm 길이로 변환
 */

export const convertDimension = (value: number, cmDistance: number, mediapipeDistance: number): number => {
    return ((cmDistance / mediapipeDistance) * value)
}