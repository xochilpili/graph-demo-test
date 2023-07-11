import fp from 'fastify-plugin';
import mongoose, { ConnectOptions } from 'mongoose';
import { get as getConfig } from '../config';
import { IModels, PostModel } from '../models/post.model';
import { FastifyInstance } from 'fastify';

export interface Db {
	models: IModels;
}
const connectDB = async (server: FastifyInstance, options: ConnectOptions) => {
	mongoose.connection.on('error', (err) => {
		server.log.info({ err }, `Error connecting to mongo`);
	});
	const url = getConfig('/mongo/uri') as string;
	await mongoose.connect(url, options);
	const models: IModels = {
		Post: PostModel,
	};
	server.decorate('db', { models });
};

export default fp(connectDB, { name: 'db' });
