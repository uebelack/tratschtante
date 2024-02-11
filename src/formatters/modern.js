const style = {
  time: '\x1b[36m',
  critical: '\x1b[41m',
  error: '\x1b[31m',
  warning: '\x1b[33m',
  info: '\x1b[35m',
  debug: '\x1b[36m',
  trace: '\x1b[32m',
  reset: '\x1b[0m',
};

function modern(message) {
  const result = [];

  result.push(`${style.time}${message.timestamp.toISOString()}`);
  result.push(' ');
  result.push(`${style.reset}${style[message.level]}${message.level.toUpperCase()}${style.reset}`);
  result.push('      '.substring(0, 9 - message.level.length));

  if (message.category) {
    result.push(`${message.category} - `);
  }
  result.push(`${message.message}`);

  if (message.stack) {
    result.push(`${message.stack}`);
  }

  return result.join('');
}

export default modern;
