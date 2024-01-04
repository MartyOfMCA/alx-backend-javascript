export default function createReportObject(employeesList) {
  return ({
    /* eslint-disable no-unused-vars */
    allEmployees: employeesList,
    getNumberOfDepartments(employeeList) {
      return (Object.keys(employeesList).length);
    },
  });
}
