export default function iterateThroughObject(reportWithIterator) {
  const reportLength = reportWithIterator.length;
  let processedReport = 0;
  let reportStr = '';

  for (const name of reportWithIterator) {
    reportStr += name;
    if ((processedReport + 1) < reportLength) reportStr += ' | ';
    processedReport += 1;
  }
  return (reportStr);
}
