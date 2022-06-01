import React from 'react';

const useKeyPress = (targetKeyArray, cbArr) => {
  const downHandler = (e) => {
    targetKeyArray.forEach((targetKey, i) => {
      if (e.key === targetKey) cbArr[i]()(e);
    });
  };

  window.addEventListener('keydown', downHandler);
  return () => {
    window.removeEventListener('keydown', downHandler);
  };
};
export default useKeyPress;
