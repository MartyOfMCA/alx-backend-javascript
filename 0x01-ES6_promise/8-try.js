const divideFunction = (num, den) => {
  if (den === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return (num / den);
  }
};

export default divideFunction;
