import { FastifyInstance } from 'fastify';
export interface IRoute {
	register(server: FastifyInstance): void;
}

export interface IRouter {
	loadRoutes(server: FastifyInstance): void;
}
