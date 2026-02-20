function lambda(message) {
  const result = [];

  if (message.category) {
    result.push(`${message.category} - `);
  }
  result.push(`${message.message}`);

  if (message.stack) {
    result.push(`${message.stack}`);
  }

  return result.join("");
}

export default lambda;
