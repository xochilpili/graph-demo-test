import { FastifyInstance } from 'fastify';
import { IRoute } from '../../interfaces/irouter';
import { GraphQLController } from '../controllers/graphql.controller';
import { fastifyApolloHandler } from '@as-integrations/fastify';

export class GraphQLRoute implements IRoute {
	private graphqlController: GraphQLController = new GraphQLController();

	public register(server: FastifyInstance): void {
		server.route({
			method: 'POST',
			url: '/graphql',
			handler: fastifyApolloHandler(server.apollo, { context: this.graphqlController.myContextFunction }),
		});
	}
}
