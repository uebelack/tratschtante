/* eslint-disable no-console */
/* istanbul ignore next */
const consolePrinter = (level, message) => {
  switch (level) {
    case 'critical':
    case 'error':
      console.error(message);
      break;
    case 'warning':
      console.warn(message);
      break;
    default:
      console.log(message);
  }
};

export default consolePrinter;
