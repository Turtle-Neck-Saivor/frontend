export const getDistance = (ax: number, ay: number, zx: number, zy: number) => {
  var dis_x = ax - zx;
  var dix_y = ay - zy;
  let dist = Math.sqrt(Math.abs(dis_x * dis_x) + Math.abs(dix_y * dix_y));
  return dist;
};

export const getVerticalDistance = (earloby: number, shouldery: number) => {
  return Math.abs(earloby - shouldery);
};
