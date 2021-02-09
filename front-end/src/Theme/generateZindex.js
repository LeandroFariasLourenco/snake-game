const generateZindex = () => {
  const minimumIndex = 5000;
  const components = [
    'popup',
    'overlay',
  ];

  const appZindexes = {};

  components.forEach((component, i) => {
    appZindexes[component] = minimumIndex + components.length + i;
  });

  return appZindexes;
};

export default generateZindex;
