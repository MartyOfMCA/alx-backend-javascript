/*
 * Create a new ArrayBuffer to store an
 * Int8 value at a specific position.
 *
 * @param {number} - The length of the array.
 * @param {number} - The position of the
 * inserted value.
 * @pram {number} - The value to be inserted.
 *
 * @returns A new ArrayBuffer with the specified
 * length and a new value inserted at the
 * given position.
 *
 * @throws Error instance when the given value
 * cannot be added.
 */
/* eslint-disable */
const createInt8TypedArray = (length, pos, value) => {
  const arr = new ArrayBuffer(length);
  const view = new DataView(arr);
  try {
    view.setInt8(pos, value);
  } catch (ex) {
    new Error('Position outside range');
  }

  return (view);
};

export default createInt8TypedArray;
