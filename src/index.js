import classicFormatter from "./formatters/classic.js";
import modernFormatter from "./formatters/modern.js";
import jsonFormatter from "./formatters/json.js";
import lambdaFormatter from "./formatters/lambda.js";
import emojiFormatter from "./formatters/emoji.js";
import consolePrinter from "./printers/console.js";

/** @typedef {"critical" | "error" | "warning" | "info" | "debug" | "trace"} Level */

/**
 * @typedef {object} LogEntry
 * @property {Date} timestamp
 * @property {Level} level
 * @property {string} [category]
 * @property {string} [message]
 * @property {string} [stack]
 */

/** @typedef {(entry: LogEntry) => string} Formatter */

/** @typedef {(level: Level, message: string) => void} Printer */

/**
 * A message to log. Functions are called lazily, only if the level is enabled.
 * Errors also log their stack trace.
 * @typedef {unknown} Message
 */

/**
 * @typedef {object} Options
 * @property {"modern" | "classic" | "json" | "lambda" | "emoji" | Formatter} [formatter]
 *   Defaults to `TRATSCHTANTE_FORMATTER` or "modern".
 * @property {"console" | Printer} [printer] Defaults to `TRATSCHTANTE_PRINTER` or "console".
 * @property {string} [category]
 * @property {Level} [level] Defaults to `TRATSCHTANTE_LOG_LEVEL`, `NODE_LOG_LEVEL` or "info".
 */

/** @typedef {{ [level in Level]: (message?: Message) => void }} Logger */

/** @type {{ [level in Level]: Level }} */
const levels = {
  critical: "critical",
  error: "error",
  warning: "warning",
  info: "info",
  debug: "debug",
  trace: "trace",
};

/** @type {Record<string, number>} */
const levelIndexes = {
  critical: 0,
  error: 1,
  warning: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

/** @type {Record<string, Formatter>} */
const formatters = {
  classic: classicFormatter,
  modern: modernFormatter,
  json: jsonFormatter,
  lambda: lambdaFormatter,
  emoji: emojiFormatter,
};

/** @type {Record<string, Printer>} */
const printers = {
  console: consolePrinter,
};

/**
 * @param {unknown} func
 * @returns {func is Function}
 */
function isFunction(func) {
  return typeof func === "function";
}

/**
 * @template T
 * @param {Record<string, T>} map
 * @param {unknown} name
 * @returns {T | undefined}
 */
function lookup(map, name) {
  return typeof name === "string" && Object.hasOwn(map, name) ? map[name] : undefined;
}

/**
 * @param {Message} message
 * @returns {string | undefined}
 */
function extractMessage(message) {
  if (message) {
    if (isFunction(message)) {
      return extractMessage(message());
    }

    return message.toString();
  }
  return undefined;
}

/** @param {Options} options */
function createLogger(options) {
  const formatter =
    (isFunction(options.formatter) ? options.formatter : lookup(formatters, options.formatter)) ||
    lookup(formatters, process.env.TRATSCHTANTE_FORMATTER) ||
    formatters.modern;

  const printer =
    (isFunction(options.printer) ? options.printer : lookup(printers, options.printer)) ||
    lookup(printers, process.env.TRATSCHTANTE_PRINTER) ||
    printers.console;

  const definedLogLevel =
    options.level || process.env.TRATSCHTANTE_LOG_LEVEL || process.env.NODE_LOG_LEVEL || "info";

  return {
    /**
     * @param {Level} level
     * @param {Message} message
     */
    log: (level, message) => {
      if (levelIndexes[definedLogLevel] >= levelIndexes[level]) {
        const entry = {
          timestamp: new Date(),
          level,
          category: options.category,
          message: extractMessage(message),
          stack: /** @type {{ stack?: string } | undefined} */ (message)?.stack,
        };
        printer(level, formatter(entry));
      }
    },
  };
}

/**
 * Creates a logger.
 * @param {Options} [options]
 * @returns {Logger}
 */
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
