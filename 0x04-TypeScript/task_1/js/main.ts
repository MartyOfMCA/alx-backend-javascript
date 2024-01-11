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
