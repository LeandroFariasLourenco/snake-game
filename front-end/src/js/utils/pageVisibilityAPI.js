const pageVisibilityAPI = () => {
  let browserAttribute;
  let browserEvent;

  if (typeof document.hidden !== 'undefined') {
    browserAttribute = 'hidden';
    browserEvent = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    browserAttribute = 'mshidden';
    browserEvent = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    browserAttribute = 'webkitHidden';
    browserEvent = 'webkitvisibilitychange';
  }

  const handleVisibilityChange = () => {
    if (document[browserAttribute]) {
      window.isPageVisible = true;
    } else {
      window.isPageVisible = false;
    }
  };

  document.addEventListener(browserEvent, handleVisibilityChange);
};

export default pageVisibilityAPI;
