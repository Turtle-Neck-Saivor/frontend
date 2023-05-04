import { checkTurtleNeck } from './checkTutleNeck';
import { convertDimension } from './convertDimension';

const getFromUser = (): number => {
  return 1;
};

// pose landmarks 3번과 6번 사이의 실제 거리 (cm)
let cmDistance = getFromUser();

// pose landmarks 3번과 6번 사이의 유클리디안 거리 (실수)
let mediapipeDistance = getDistance();

// 사용자가 올바른 자세일 때 pose landmarks의 어깨선과 face mesh의 132, 361의 수직 거리 (실수)
let _k = getDistance();

// 사용자가 의식하지 않을 때 pose landmarks의 어깨선과 face mesh의 132, 361의 수직 거리 (실수)
let _y = getDistance();

// 단순하게 미디어파이프 좌표 사이의 거리를 구한 값을 cm 단위로 변환
let k = convertDimension(_k, cmDistance, mediapipeDistance);

// 단순하게 미디어파이프 좌표 사이의 거리를 구한 값을 cm 단위로 변환
let y = convertDimension(_y, cmDistance, mediapipeDistance);

// 결과 반환
let result = checkTurtleNeck(y, k);
