export const calculateAverage = (arr: any) => {
  const filteredArr = arr.filter(Number.isFinite);
  if (filteredArr.length === 0) return 0;
  const sum = filteredArr.reduce((a, b) => a + b, 0);
  return sum / filteredArr.length;
};
