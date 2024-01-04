const loadBalancer = (chinaDownload, USDownload) => Promise.race([
  chinaDownload,
  USDownload,
]).then((response) => response);

export default loadBalancer;
