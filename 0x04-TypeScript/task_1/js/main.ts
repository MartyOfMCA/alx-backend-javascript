interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => (
  `${firstName[0]}. ${lastName}`
);

interface IStudent {
  firstName: string,
  lastName: string
}

class StudentClass implements IStudent {
  firstName: string;
  lastName: string;

  constructor(params: IStudent) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }

  workOnHomework(): string {
    return ('Currently working');
  }

  displayName(): string {
    return (this.firstName);
  }
}

