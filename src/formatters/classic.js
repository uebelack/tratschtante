const levelMapping = {
  critical: 'critical',
  error: 'error   ',
  warning: 'warning ',
  info: 'info    ',
  debug: 'debug   ',
  trace: 'trace   ',
};

function classic(message) {
  const result = [];

  result.push(`[${message.timestamp.toISOString()}]`);
  result.push(`[${levelMapping[message.level]}] `);

  if (message.category) {
    result.push(`${message.category} - `);
  }
  result.push(`${message.message}`);

  if (message.stack) {
    result.push(`${message.stack}`);
  }

  return result.join('');
}

module.exports = classic;
