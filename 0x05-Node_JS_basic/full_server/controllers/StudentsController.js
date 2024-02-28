const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((res) => {
        let msg = 'This is the list of our students';

        res.forEach((value, key) => { msg += `\nNumber of students in ${key}: ${value.length}. List: ${value.join(', ')}`; });
        response.send(msg);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((res) => res.forEach((value, key) => { if (key === major) response.send(`List: ${value.join(', ')}`); }))
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }
}

module.exports = StudentsController;
