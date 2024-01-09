/**
 * Return the sum of all student ids from
 * the given array.
 *
 * @param {object} - An array of student
 * objects.
 *
 * @returns THe sum of all student ids.
 */
const getStudentIdsSum = (students) => (
  students.reduce((prev, next) => (
    prev + next.id
  ), 0)
);

export default getStudentIdsSum;
