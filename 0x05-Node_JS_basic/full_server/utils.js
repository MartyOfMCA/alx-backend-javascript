const fs = require('fs');

/**
 * Determines whether the given line is the
 * row header in the dataset or not.
 *
 * @param {string} - The line to inspect.
 *
 * @returns A boolean indicating whether the
 * given line is the row header or not.
 */
const isRowHeader = (line) => {
  const heading = 'firstname,lastname,age,field';

  if (line.includes(heading)) return (true);
  return (false);
};

/**
 * Retrieves a Set of fields from a list
 * of rows.
 *
 * @param {array} - An array of strings
 * representing records of students.
 *
 * @returns A set containing the fields
 * of all the students.
 *
 */
const getFields = (lines) => {
  const fields = new Set();

  lines.forEach((line) => {
    if (line !== '') {
      if (!isRowHeader(line)) {
        // Fields are the fourth item in
        // the CSV file.
        fields.add(line.split(',')[3]);
      }
    }
  });

  return (fields);
};

/**
 * Extract the field of a student from the
 * sntire student record represented
 * as a line of string.
 *
 * @param {string} - The line containing
 * the entire student record.
 *
 * @returns The field of study the
 * student belongs.
 *
 */
const getField = (line) => (line.split(',')[3]);

/**
 * Extract the name of a student from the
 * sntire student record represented
 * as a line of string.
 *
 * @param {string} - The line containing
 * the entire student record.
 *
 * @returns The name of the student.
 *
 */
const getName = (line) => (line.split(',')[0]);

/**
 * Compiles the records of students in the
 * various fields.
 *
 * @param {map} - A dictionary containing
 * the various student fields and the students
 * pursuing those fields.
 *
 * @returns A string containing a summary
 * of compiled student records for the
 * various fields.
 *
 */
const getRecordsSummary = (records) => (records);

/**
 * Fetch student records from the given
 * CSV file.
 *
 * @param {string} - The path to the file
 * containing students records..
 *
 * @throws Error instance when the given
 * file cannot be found.
 *
 */
const readDatabase = (filePath) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, fileContents) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const lines = fileContents.split('\n');
        const fields = getFields(lines);
        const records = new Map();

        fields.forEach((field) => {
          lines.forEach((line) => {
            if (getField(line) === field) {
              const ____name = getName(line);

              if (!records.get(field)) records.set(field, [____name]);
              else records.get(field).push(____name);
            }
          });
        });

        resolve(getRecordsSummary(records));
      }
    });
  });

  return (promise);
};

module.exports = readDatabase;
