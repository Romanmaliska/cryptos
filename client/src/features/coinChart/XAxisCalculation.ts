export const getXAxisValues = () => {
  let hourWindow = 4;

  const XAxisValues = Array.from({ length: 5 }, () => {
    const date = new Date();
    date.setHours(date.getHours() - hourWindow);
    hourWindow += 4;
    return `${date.getHours()}:00`;
  });

  return XAxisValues.reverse();
};
