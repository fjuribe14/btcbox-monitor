import winston from "winston";
const { createLogger, transports, format } = winston;
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(label({ label: "my-service" }), timestamp(), myFormat),
  transports: [
    new transports.File({
      filename: "logs/my-service.log",
      level: "info",
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ],
});

export default logger;
