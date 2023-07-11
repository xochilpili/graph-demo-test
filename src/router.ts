import { FastifyInstance } from 'fastify';
import { IRouter } from './interfaces/irouter';
import { Logger } from 'pino';
import { pinoLogger } from './logger';
import { HealthzRoute } from './app/routes/healthz.route';
import { GraphQLRoute } from './app/routes/graphql.route';

export class Router implements IRouter {
	private logger: Logger = pinoLogger;
	private healthzRoute = new HealthzRoute();
	private graphQLRoute = new GraphQLRoute();
	public async loadRoutes(server: FastifyInstance): Promise<void> {
		this.logger.info(`Registering routes`);
		this.healthzRoute.register(server);
		this.graphQLRoute.register(server);

		// eslint-disable-next-line: no-console
		console.log(server.printRoutes({ includeMeta: true || [] }));
	}
}
