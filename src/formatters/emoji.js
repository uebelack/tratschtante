const levelMapping = {
  critical: "\u{1F4A5}",
  error: "\u{274C}",
  warning: "\u{26A0}\u{FE0F}",
  info: "\u{2139}\u{FE0F}",
  debug: "\u{1F41B}",
  trace: "\u{1F50D}",
};

function emoji(message) {
  const result = [];

  result.push(message.timestamp.toISOString());
  result.push(` ${levelMapping[message.level]} `);

  if (message.category) {
    result.push(`${message.category} - `);
  }
  result.push(`${message.message}`);

  if (message.stack) {
    result.push(`${message.stack}`);
  }

  return result.join("");
}

export default emoji;
