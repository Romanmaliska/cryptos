export const getYAxisValues = (sparkline: string[]) => {
  const prices = sparkline.map((price) => Number(price));
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const step = (maxPrice - minPrice) / 5;
  let currentStep = 0;
  const yAxisValues = Array.from({ length: 6 }, () => {
    const price = minPrice + currentStep;
    currentStep += step;
    return price.toFixed(2);
  });

  return yAxisValues;
};
