const generateFoodPosition = (max, min = 0) => (
  Math.round((Math.random() * (max - min) + min) / 10) * 10
);

export default generateFoodPosition;
