import {useCallback} from 'react';

export const useAwesomeA = () => {
  const {awesomeFunc} = useAwesomeB();

  const awesome = useCallback(() => {
    const message = awesomeFunc();
    return 'Hellow! ' + message;
  }, [awesomeFunc]);

  return {awesome};
};

export const useAwesomeB = () => {
  const awesomeFunc: () => string = () => {
    throw Error('not implemented yet');
  };

  return {awesomeFunc};
};
