import { FastifyRequest, FastifyReply } from 'fastify';
export class HealthzController {
	//
	getHealthz = async (request: FastifyRequest, reply: FastifyReply) => {
		return reply.code(200).send({ message: 'ok' });
	};
}
