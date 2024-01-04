const guardrail = (mathFunction) => {
  const array = [];

  try {
    array.push(mathFunction());
  } catch (error) {
    array.push(String(error));
  } finally {
    array.push('Guardrail was processed');
  }
  return (array);
};

export default guardrail;
