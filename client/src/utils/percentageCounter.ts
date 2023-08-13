export const weeklyChangeInPercentage = (params) => {
  const { current, previous } = params;
  const change = current - previous;
  const percentage = (change / previous) * 100;
  return percentage;
};
