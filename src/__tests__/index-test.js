import tratschtante from '../index';

class TestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TestError';
  }
}

describe('tratschtante', () => {
  it('should work', () => {
    tratschtante().debug('test');
    const logger = tratschtante({ printer: jest.fn() });
    logger.trace('test');
    logger.error();
    logger.error(null);
    logger.error(undefined);
    logger.error([]);
    logger.error({});
  });

  it('should log with the right level', () => {
    const formatter = jest.fn();
    const printer = jest.fn();
    const logger = tratschtante({ level: 'trace', printer, formatter });

    const mockDate = new Date(1466424490000);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate);

    logger.critical('critical');
    logger.error('error');
    logger.warning('warning');
    logger.info('info');
    logger.debug('debug');
    logger.trace('trace');

    expect(formatter.mock.calls[0][0]).toEqual({
      level: 'critical', message: 'critical', timestamp: new Date(),
    });

    expect(formatter.mock.calls[1][0]).toEqual({
      level: 'error', message: 'error', timestamp: new Date(),
    });

    expect(formatter.mock.calls[2][0]).toEqual({
      level: 'warning', message: 'warning', timestamp: new Date(),
    });

    expect(formatter.mock.calls[3][0]).toEqual({
      level: 'info', message: 'info', timestamp: new Date(),
    });

    expect(formatter.mock.calls[4][0]).toEqual({
      level: 'debug', message: 'debug', timestamp: new Date(),
    });

    expect(formatter.mock.calls[5][0]).toEqual({
      level: 'trace', message: 'trace', timestamp: new Date(),
    });

    spy.mockRestore();
  });

  it('should only log if log level matches', () => {
    const formatter = jest.fn();
    const printer = jest.fn();
    const logger = tratschtante({ level: 'warning', printer, formatter });

    const mockDate = new Date(1466424490000);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate);

    logger.error('error');
    logger.warning('warning');
    logger.info('info');
    logger.debug('debug');
    logger.trace('trace');

    expect(formatter.mock.calls.length).toBe(2);
    expect(printer.mock.calls.length).toBe(2);

    expect(formatter.mock.calls[0][0]).toEqual({
      level: 'error', message: 'error', timestamp: new Date(),
    });

    expect(formatter.mock.calls[1][0]).toEqual({
      level: 'warning', message: 'warning', timestamp: new Date(),
    });

    spy.mockRestore();
  });

  it('should execute functions', () => {
    const formatter = jest.fn();
    const printer = jest.fn();
    const logger = tratschtante({ level: 'trace', printer, formatter });

    const mockDate = new Date(1466424490000);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate);

    logger.error(() => 'Pariatur deserunt ipsum aute laboris laboris eu fugiat ex elit adipisicing velit.');

    expect(formatter.mock.calls[0][0]).toEqual({
      level: 'error', message: 'Pariatur deserunt ipsum aute laboris laboris eu fugiat ex elit adipisicing velit.', timestamp: new Date(),
    });

    spy.mockRestore();
  });

  it('should handle errors with stacktrace', () => {
    const printer = jest.fn();
    const logger = tratschtante({ printer, formatter: 'json' });
    try {
      throw new TestError('Labore esse quis commodo incididunt proident magna exercitation anim.');
    } catch (e) {
      logger.error(e);
    }

    expect(printer.mock.calls[0][1].indexOf('processTicksAndRejections')).toBeGreaterThan(0);
    expect(printer.mock.calls[0][1].indexOf('TestError: Labore')).toBeGreaterThan(0);
  });
});
