export default function createIteratorObject(report) {
  const namesReport = [];

  for (const val of Object.values(report.allEmployees)) {
    namesReport.push(...val);
  }
  return (namesReport);
}
