interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student: Student = {
  firstName: 'Jake',
  lastName: 'Savage',
  age: 19,
  location: 'Asokwa'
};
const anotherStudent: Student = {
  firstName: 'Tow',
  lastName: 'Walker',
  age: 25,
  location: 'Ahodwo'
};

const studentsList: Student[] = [student, anotherStudent];

document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');

  studentsList.forEach((student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const col1: HTMLTableCellElement = document.createElement('td');
    const col2: HTMLTableCellElement = document.createElement('td');

    col1.innerText = student.firstName;
    col2.innerText = student.location;

    tr.appendChild(col1);
    tr.appendChild(col2);
    table.appendChild(tr);
  });

  document.body.appendChild(table);
});
