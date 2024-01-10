/**
 * Checks whether items in the given array
 * exists in the set.
 *
 * @param {object} - The set to check
 * @param {object} - An array of items to
 * search for.
 *
 * @returns - True when all items in the
 * array is found in the set.
 */
const hasValuesFromArray = (set, arr) => {
  let isFound;

  arr.forEach((item) => {
    if (set.has(item)) isFound = true;
    else isFound = false;
  });

  return (isFound);
};

export default hasValuesFromArray;
