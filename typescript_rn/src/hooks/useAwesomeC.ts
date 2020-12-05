const useAwesomeC = () => {
  const awesomeFuncC: () => string = () => {
    return 'message from C!';
  };

  return {awesomeFuncC};
};

export default useAwesomeC;
