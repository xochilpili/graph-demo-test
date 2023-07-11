import { ApolloFastifyContextFunction } from '@as-integrations/fastify';
import { FastifyReply, FastifyRequest } from 'fastify';

export class GraphQLController {
	myContextFunction: ApolloFastifyContextFunction<any> = async (request: FastifyRequest, reply: FastifyReply) => {
		return {
			greeting: 'Hello world!',
		};
	};
}
