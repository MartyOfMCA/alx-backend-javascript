/**
 * Update Map items whose quantity level is 1.
 *
 * @param {object} - The map entries.
 *
 * @returns An updated map with updated entries
 * meeting the criteria.
 */
const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((value, key) => {
    if (value <= 1) map.set(key, 100);
  });
};

export default updateUniqueItems;
