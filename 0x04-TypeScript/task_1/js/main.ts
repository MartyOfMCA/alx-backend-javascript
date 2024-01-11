interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

const teacher: Teacher = {
    firstName: 'Jake',
    lastName: 'Savage',
    fullTimeEmployee: true,
    location: 'Asokwa',
    contract: true
};

console.log(teacher);

interface Directors extends Teacher {
    numberOfReports: number
}

const director: Directors = {
  firstName: 'Tom',
  lastName: 'Walker',
  location: 'Sobolo',
  fullTimeEmployee: true,
  numberOfReports: 12,
};

console.log(director)
