import lambda from '../lambda.js';

describe('lambda formatter', () => {
  it('should format', () => {
    expect(lambda({
      timestamp: new Date(1642452298000), level: 'debug', message: 'Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.',
    })).toEqual('Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.');
    expect(lambda({
      timestamp: new Date(1642452298000), category: 'test', level: 'info', message: 'Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.', stack: '\nStacktrace',
    })).toEqual('test - Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.\nStacktrace');
  });
});
