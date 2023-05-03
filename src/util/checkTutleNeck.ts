/** 
 * @param {number} y 사용자의 귓볼과 어깨선 사이의 수직 거리 (cm)
 * @param {number} k 사용자가 올바른 자세일 때 측정한 y값 (cm)
*/
export const checkTurtleNeck = (y: number, k: number) => {
    const criticalPoint1 = Math.sqrt((k**2) - 6.25)
    const criticalPoint2 = Math.sqrt((k**2) - 25)
    if(0 < y && y < criticalPoint1){
        return "RED"
    }else if(criticalPoint1 < y && y < criticalPoint2){
        return "YELLOW"
    }else if(criticalPoint2 < y && y < k){
        return "GREEN"
    }else{
        return "ERROR"
    }
}