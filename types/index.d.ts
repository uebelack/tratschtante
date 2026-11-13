export type Level = "critical" | "error" | "warning" | "info" | "debug" | "trace";
export type LogEntry = {
    timestamp: Date;
    level: Level;
    category?: string;
    message?: string;
    stack?: string;
};
export type Formatter = (entry: LogEntry) => string;
export type Printer = (level: Level, message: string) => void;
export type Message = unknown;
export type Options = {
    /**
     * Defaults to `TRATSCHTANTE_FORMATTER` or "modern".
     */
    formatter?: "modern" | "classic" | "json" | "lambda" | "emoji" | Formatter;
    /**
     * Defaults to `TRATSCHTANTE_PRINTER` or "console".
     */
    printer?: "console" | Printer;
    category?: string;
    /**
     * Defaults to `TRATSCHTANTE_LOG_LEVEL`, `NODE_LOG_LEVEL` or "info".
     */
    level?: Level;
};
export type Logger = {
    [level in Level]: (message?: Message) => void;
};
/**
 * Creates a logger.
 * @param {Options} [options]
 * @returns {Logger}
 */
declare const tratschtante: (options?: Options) => Logger;
export default tratschtante;
//# sourceMappingURL=index.d.ts.map