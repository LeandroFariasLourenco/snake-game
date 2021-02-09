const randomNumber = (max, min = 0) => {
  const range = max - min;
  return Math.floor(Math.random() * range + min);
};

export default randomNumber;
