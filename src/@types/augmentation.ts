import * as fastify from 'fastify';
import { Db } from '../plugins/mongo.plugin';
import { ApolloServer } from '@apollo/server';
declare module 'fastify' {
	export interface FastifyInstance {
		apollo: ApolloServer;
		db: Db;
	}
}
