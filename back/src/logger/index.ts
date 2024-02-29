import winston from "winston";
import date from "date-fns";
const { createLogger, transports, format } = winston;
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const name = process.env.npm_package_name || "service";

const logger = createLogger({
  format: combine(label({ label: `${name}` }), timestamp(), myFormat),
  transports: [
    new transports.File({
      filename: `storage/logs/${name}-${date.format(new Date(), "yyyy-MM-dd")}.log`,
      level: "info",
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ],
});

export default logger;
