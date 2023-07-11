import fp from 'fastify-plugin';
import { ApolloServer } from '@apollo/server';
import { FastifyInstance } from 'fastify';
import typeDefs from '../models/graphql.schema';
import resolvers from '../resolvers';
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { GraphqlContext } from '../interfaces/graphql.context';
import { fastifyApollo } from '@as-integrations/fastify/build/esm/plugin';

const connectApollo = async (server: FastifyInstance) => {
	const apollo = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [fastifyApolloDrainPlugin(server)],
	});
	await apollo.start();
	server.decorate('apollo', apollo);
};

export default fp(connectApollo, { name: 'apollo' });
