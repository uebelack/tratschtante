import classicFormatter from './formatters/classic.js';
import modernFormatter from './formatters/modern.js';
import jsonFormatter from './formatters/json.js';
import lambdaFormatter from './formatters/lambda.js';
import consolePrinter from './printers/console.js';

const levels = {
  critical: 'critical',
  error: 'error',
  warning: 'warning',
  info: 'info',
  debug: 'debug',
  trace: 'trace',
};

const levelIndexes = {
  critical: 0,
  error: 1,
  warning: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const formatters = {
  classic: classicFormatter,
  modern: modernFormatter,
  json: jsonFormatter,
  lambda: lambdaFormatter,
};

const printers = {
  console: consolePrinter,
};

function isFunction(func) {
  return typeof func === 'function';
}

function extractMessage(message) {
  if (message) {
    if (isFunction(message)) {
      return extractMessage(message());
    }

    return message.toString();
  }
  return undefined;
}

function createLogger(options) {
  const formatter = (isFunction(options.formatter)
    ? options.formatter : formatters[options.formatter])
  || formatters[process.env.TRATSCHTANTE_FORMATTER]
  || formatters.modern;

  const printer = (isFunction(options.printer)
    ? options.printer : formatters[options.printer])
  || printers[process.env.TRATSCHTANTE_PRINTER]
  || printers.console;

  const definedLogLevel = options.level || process.env.TRATSCHTANTE_LOG_LEVEL || process.env.NODE_LOG_LEVEL || 'info';

  return {
    log: (level, message) => {
      if (levelIndexes[definedLogLevel] >= levelIndexes[level]) {
        const entry = {
          timestamp: new Date(),
          level,
          category: options.category,
          message: extractMessage(message),
          stack: message && message.stack,
        };
        printer(level, formatter(entry));
      }
    },
  };
}

const tratschtante = (options = {}) => {
  const logger = createLogger(options);
  return {
    critical: (message) => logger.log(levels.critical, message),
    error: (message) => logger.log(levels.error, message),
    warning: (message) => logger.log(levels.warning, message),
    info: (message) => logger.log(levels.info, message),
    debug: (message) => logger.log(levels.debug, message),
    trace: (message) => logger.log(levels.trace, message),
  };
};

export default tratschtante;
