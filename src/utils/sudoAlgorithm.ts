/**
 * 
 * 알고리즘 사용 방법을 설명하기 위한 코드 
 * 
 */

import { calculateEuclideanDistance } from "./calculateDistance";
import { calculateMidPoint } from "./calculatePoint";
import { checkTurtleNeck } from "./checkTutleNeck";


/**
 * 1. 바른 자세 기준 값 측정 알고리즘
 */

/** 
 * 1. 사용자로부터 바른 자세 기준 값을 계산한다.
 * 1-1. 사용자와 모니터 사이의 거리가 40cm일 때를 기준으로, 귓볼과 어깨의 각각의 좌표 4개를 100개씩 모은다.
 * 1-2. 그 뒤에 각각의 좌표에 대한 평균을 구한다.
 * 1-3. 그 값을 여기선 a(왼쪽 귓볼 좌표 100개의 평균값), b(오른쪽 귓볼 좌표 100개의 평균값), c(왼쪽 어깨 좌표 100개의 평균값), d(오른쪽 어깨 좌표 100개의 평균값)이라고 가정한다.
 * 1-4. a와 b의 중점, c와 d의 중점 사이의 유클리드 거리를 구한다. 
 * 1-5. 이 거리를 저장하여 실시간 자세 정보 측정을 할 시에 계속해서 사용한다.
 */

const a, b, c, d;

const midEarlob = calculateMidPoint(a, b);
const midShoulder = calculateMidPoint(c, d);
const distanceAboutRightPosture = calculateEuclideanDistance(midEarlob, midShoulder);

/**
 * 2. 실시간 사용자 자세 정보 측정 알고리즘
 */

/**
 * 2. 실시간으로 사용자로부터 자세 정보를 가져온다.
 * 2-1. 모니터로부터 사용자의 거리가 35~45cm인 경우에만 값을 사용한다.
 * 2-2. 만약 이 거리에서 벗어난 경우, 경고를 통해 사용자가 곧바로 모니터와의 거리를 조정하도록 한다.
 * 2-3. 그리고 귓볼의 중점과 어깨의 중점 사이의 거리를 위와 같은 방법으로 계산한다.
 * 2-4. 위에서 구한 바른 자세 기준 값과 이 값을 거북목 상태 진단 알고리즘에 넣는다.
 */

const distanceFromUserPosture;
const status = checkTurtleNeck(distanceFromUserPosture, distanceAboutRightPosture);