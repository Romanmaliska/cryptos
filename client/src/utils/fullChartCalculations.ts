export const getXAxisValues = () => {
  const date = new Date();
  const currentHour = date.getHours();
  const hoursSequence = Array.from({ length: 5 }, (_, index) => {
    const hoursWindow = 4;
    const hour = (currentHour - hoursWindow * index) % 24;
    return `${hour}:00`;
  });
  return hoursSequence.reverse(); 
};
