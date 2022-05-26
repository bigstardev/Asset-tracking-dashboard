export const totalValue = (data) => {
  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);
  return totalValue;
};
export const convertToPercentage = (value, totalValue) => {
  const percentage = parseFloat((value * 100) / totalValue).toFixed(2);
  return percentage;
};
