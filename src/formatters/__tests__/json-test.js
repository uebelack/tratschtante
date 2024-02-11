import json from '../json.js';

describe('json formatter', () => {
  it('should format', () => {
    expect(json({
      timestamp: new Date(1642452298000), category: 'test', level: 'debug', message: 'Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.',
    })).toEqual('{"timestamp":"2022-01-17T20:44:58.000Z","category":"test","level":"debug","message":"Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua."}');
    expect(json({
      timestamp: new Date(1642452298000), category: 'test', level: 'info', message: 'Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua.',
    })).toEqual('{"timestamp":"2022-01-17T20:44:58.000Z","category":"test","level":"info","message":"Anim velit aliqua sunt deserunt ipsum anim mollit dolor dolore aliqua."}');
  });
});
