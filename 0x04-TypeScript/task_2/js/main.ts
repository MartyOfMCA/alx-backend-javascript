interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface  {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};

class Director implements DirectorInterface {
  workFromHome(): string {
    return ("Working from home");
  }

  getCoffeeBreak(): string {
    return ("Getting a coffee break");
  }

  workDirectorTasks(): string {
    return ("Getting to director tasks");
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return ("Cannot work from home");
  }

  getCoffeeBreak(): string {
    return ("Cannot have a break");
  }

  workTeacherTasks(): string {
    return ("Getting to work");
  }
}

const createEmployee = (salary: number | string) => (
  typeof (salary) === 'number' && salary < 500
  ? new Teacher()
  : new Director()
);

const isDirector = (employee: Teacher | Director): employee is Director => (
  employee instanceof Director
);

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) employee.workDirectorTasks();
  else employee.workTeacherTasks();
};

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: string): string => (
  todayClass === 'Math'
  ? 'Teaching Math'
  : 'Teaching History'
);
