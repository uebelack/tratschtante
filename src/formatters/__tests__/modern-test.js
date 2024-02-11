import modern from '../modern.js';

describe('modern formatter', () => {
  it('should format', () => {
    expect(modern({
      timestamp: new Date(1642452298000), category: 'test', level: 'debug', message: 'Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.',
    })).toEqual('\x1b[36m2022-01-17T20:44:58.000Z \x1b[0m\x1b[36mDEBUG\x1b[0m    test - Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.');
    expect(modern({
      timestamp: new Date(1642452298000), level: 'error', message: 'Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.', stack: '\nStacktrace',
    })).toEqual('\x1b[36m2022-01-17T20:44:58.000Z \x1b[0m\x1b[31mERROR\x1b[0m    Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.\nStacktrace');
  });
});
