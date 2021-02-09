const generateFoodPosition = (max, min = 0) => {
  const range = max - min;
  return Math.round((Math.random() * range + min) / 10) * 10;
};

export default generateFoodPosition;
