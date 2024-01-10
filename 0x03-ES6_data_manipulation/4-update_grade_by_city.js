/**
 * Returns an array of students for a
 * specific city along with their new
 * grades.
 *
 * @param {object} - An array of student
 * objects.
 * @param {string} - The city used as the
 * lookup array.
 * @param {object} - The grades for a student.
 */
/* eslint-disable */
const updateStudentGradeByCity = (students, city, grades) => (
  students.filter((student) => {
    if (student.location === city) {
      student.grade = 'N/A';
      grades.map((grade) => {
        if (student.id === grade.studentId) student.grade = grade.grade;
        return (grade);
      });
      return (student);
    }
  })
);

export default updateStudentGradeByCity;
