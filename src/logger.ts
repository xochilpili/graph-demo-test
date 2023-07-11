import { pino, Logger } from 'pino';
import { get as getConfig } from './config';

export const pinoLogger: Logger = pino({
	enabled: getConfig('/logger/enabled') as boolean,
	level: getConfig('/logger/level') as string,
});
