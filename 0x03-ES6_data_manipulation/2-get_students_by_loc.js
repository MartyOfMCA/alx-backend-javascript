/**
 * Return an array of students located in
 * a specific city.
 *
 * @param {object} - A list of student
 * objects.
 * @param {string} - The lookup value.
 *
 * @returns An array of objects matching
 * the given criteria.
 */
const getStudentsByLocation = (students, location) => (
  students.filter((student) => student.location === location));

export default getStudentsByLocation;
