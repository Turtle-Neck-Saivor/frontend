import { Coordinate } from "../types/mediapipe";


export const calculateMidPoint = (coordinate1:Coordinate, coordinate2: Coordinate):Coordinate => {
    let midPoint = {x:0, y:0}
    midPoint.x = (coordinate1.x + coordinate2.x) / 2;
    midPoint.y = (coordinate1.y + coordinate2.y) / 2;
    return midPoint;
};