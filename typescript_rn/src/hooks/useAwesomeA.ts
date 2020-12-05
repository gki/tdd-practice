import {useCallback} from 'react';
import useAwesomeB from './useAwesomeB';
import useAwesomeC from './useAwesomeC';
import {useAwesomeD} from './useAwesomeD';

const useAwesomeA = () => {
  const {awesomeFuncB} = useAwesomeB();
  const {awesomeFuncC} = useAwesomeC();
  const {awesomeFuncD} = useAwesomeD();

  const awesome = useCallback(() => {
    const messageB = awesomeFuncB();
    const messageC = awesomeFuncC();
    const messageD = awesomeFuncD();
    return `Hellow! Here are messages for you!: ${messageB}, ${messageC}, ${messageD}`;
  }, [awesomeFuncB, awesomeFuncC, awesomeFuncD]);

  return {awesome};
};

export default useAwesomeA;
