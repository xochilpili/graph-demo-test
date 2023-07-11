import { FastifyInstance } from 'fastify';
import { IRoute } from '../../interfaces/irouter';
import { HealthzController } from '../controllers/healthz.controller';

export class HealthzRoute implements IRoute {
	private healthzController: HealthzController = new HealthzController();

	public register(server: FastifyInstance): void {
		server.route({
			method: 'GET',
			url: '/healthz',
			handler: this.healthzController.getHealthz,
		});
	}
}
