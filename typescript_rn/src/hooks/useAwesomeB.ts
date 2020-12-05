const useAwesomeB = () => {
  const awesomeFuncB: () => string = () => {
    throw Error('awesomeFuncB is not implemented yet');
  };

  return {awesomeFuncB};
};

export default useAwesomeB;
