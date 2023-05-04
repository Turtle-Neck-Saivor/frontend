import { DistanceMediapipe } from '../types/mediapipe';
import { checkTurtleNeck } from './checkTutleNeck';
import { convertDimension } from './convertDimension';
import { getDistance, getVerticalDistance } from './getDistance';

/**
 * mediapipe의 특징점을 통해 거리를 계산하는 함수
 * @param {number} standradInput 사용자가 입력한 실제 눈썹 사이 거리
 * @param {number} leyebrow 왼쪽 눈썹 좌표 (3)
 * @param {number} reyebrow 오른쪽 눈썹 좌표 (6)
 * @param {number} lshoulder 어깨선을 구하기 위한 왼쪽 어깨 좌표 (11)
 * @param {number} learlob face mesh 왼쪽 귓볼 (132)
 * @returns mediapipe로 측정한 값을 cm 길이로 변환
 *
 */

export const algorithm = ({
  standradInput,
  leyebrow,
  reyebrow,
  lshoulder,
  learlob,
}: DistanceMediapipe) => {
  // TODO: 사용자 입력 값
  let cmDistance = standradInput;

  let mediapipeDistance = getDistance(
    leyebrow.x,
    leyebrow.y,
    reyebrow.x,
    reyebrow.y,
  );

  // TODO: 어깨선과 귓볼의 수직 거리 초기 기준값 (현재 임의값)
  let _k = getVerticalDistance(0.4849410355091095, 0.7636772990226746);

  // 사용자가 의식하지 않을 때 어깨선과 귓볼의 수직 거리 (실수)
  let _y = getVerticalDistance(learlob.y, lshoulder.y);

  // cm 단위로 변환
  let k = convertDimension(_k, cmDistance, mediapipeDistance);
  let y = convertDimension(_y, cmDistance, mediapipeDistance);
  // 결과 반환
  console.log(y, k);
  let result = checkTurtleNeck(y, k);

  return {
    result,
  };
};
