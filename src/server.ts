import fastify, { FastifyInstance } from 'fastify';
import { ApolloServer } from '@apollo/server';
import fastifyApollo, { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { IRouter } from './interfaces/irouter';
import { Router } from './router';
import { Logger } from 'pino';
import { pinoLogger } from './logger';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import compress from '@fastify/compress';
import { get as getConfig } from './config';
import dbPlugin from './plugins/mongo.plugin';
import apolloPlugin from './plugins/apollo.plugin';
export class Server {
	private static _instance: FastifyInstance;
	private static logger: Logger = pinoLogger;
	private static router: IRouter = new Router();

	public static async start(): Promise<void> {
		try {
			// fastify instance
			this._instance = fastify({
				logger: pinoLogger,
			});

			// registering plugins
			await this._instance.register(cors);
			await this._instance.register(compress);
			await this._instance.register(helmet);
			// apollo
			await this._instance.register(apolloPlugin);
			// mongoose plugin
			await this._instance.register(dbPlugin);

			// registering routes
			this.router.loadRoutes(this._instance);

			// listen
			await this._instance.listen({
				host: getConfig('/service/host') as string,
				port: getConfig('/service/port') as number,
			});
		} catch (error) {
			this.logger.error(error, `Error loading server`);
		}
	}

	public static async stop(): Promise<void> {
		if (!this._instance) return;
		await this._instance.close();
	}
}
