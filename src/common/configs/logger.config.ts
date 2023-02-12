import { format, transports } from 'winston';
import { utilities } from 'nest-winston';
import 'winston-daily-rotate-file';

import type { WinstonModuleOptions } from 'nest-winston';

const customFormat = format.combine(
  format.colorize({
    all: true,
    colors: { info: 'green', error: 'red' },
  }),
  format.timestamp({ format: 'YY/MM/DD HH:mm:ss.SSS' }),
  utilities.format.nestLike('nest-prisma', {
    prettyPrint: true,
    colors: true,
  })
);

const customFormat2 = format.combine(
  format.timestamp({ format: 'YY/MM/DD HH:mm:ss.SSS' }),
  format.prettyPrint(),
  format.json(),
  utilities.format.nestLike('nest-prisma', {
    prettyPrint: true,
  }),
  format.uncolorize()
);

const defaultOptions = {
  format: customFormat2,
  json: true,
  maxSize: '20mb',
  maxFiles: '7d',
};

const config: WinstonModuleOptions = {
  exitOnError: false,
  format: customFormat,
  transports: [
    new transports.Console({
      format: customFormat,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/info-%DATE%.log',
      level: 'info',
      ...defaultOptions,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      level: 'error',
      ...defaultOptions,
    }),
  ],
};

export default config;
