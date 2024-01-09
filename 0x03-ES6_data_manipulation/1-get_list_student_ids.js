/**
 * Return an array of student ids from a
 * list of given student objects.
 *
 * @param {object} - An array pf objects.
 * Each object contains the keys, id,
 * firstName and location.
 *
 * @returns An array containing the ids
 * of all the students.
 */
const getListStudentIds = (students) => (Array.isArray(students)
  ? students.map((student) => student.id)
  : []);

export default getListStudentIds;
