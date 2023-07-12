/**
 * mediapipe를 통해 얻은 특징점 간의 사이의 거리를 cm 단위로 변환해주는 함수
 * @param {number} irisDistance mediapipe를 통해서 측정한 홍채 길이
 * @param {number} targetDistance cm로 단위를 변화하고자 하는 길이를 mediapipe를 통해 얻은 값
 * @returns mediapipe로 측정한 targetDistance 값을 cm 길이로 변환
 */

export const convertDistanceDimension = (irisDistance: number, targetDistance: number): number => {
    const IRIS_DISTANCE = 1.17 
    return ((targetDistance / irisDistance) * IRIS_DISTANCE)
}