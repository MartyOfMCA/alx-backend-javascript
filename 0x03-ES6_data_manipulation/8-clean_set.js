/**
 * Fetch Set values matching the strt string.
 *
 * @param {object} - The set containing a
 * list of strings.
 * @param {string} - The start string.
 *
 * @returns A string containing all the
 * values of the set seperated by hyphens.
 */
const cleanSet = (set, startString) => {
  const list = [];

  if (typeof (startString) !== 'string' || startString === '') return '';

  set.forEach((item) => {
    if (item && item.startsWith(startString)) list.push(item.slice(startString.length));
  });

  return list.join('-');
};

export default cleanSet;
