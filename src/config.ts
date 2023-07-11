import { Store } from '@hapipal/confidence';
import dotEnv from 'dotenv';
dotEnv.config();

const document = {
	env: {
		$env: 'ENV',
		$default: 'development',
	},
	apiVersion: {
		$env: 'API_VERSION',
		$default: 'v1',
	},
	service: {
		host: {
			$env: 'HOST',
			$default: 'localhost',
		},
		port: {
			$env: 'PORT',
			$coerce: 'number',
			$default: 4000,
		},
	},
	mongo: {
		uri: {
			$env: 'MONGO_URI',
			$default: 'mongodb://localhost:27017/blog_test',
		},
	},
	logger: {
		enabled: {
			$env: 'LOGGER_ENABLED',
			$coerce: 'boolean',
			$default: true,
		},
		level: {
			$env: 'LOGGER_LEVEL',
			$default: 'info',
		},
	},
};

const configStore = new Store(document);
export const get = (key: string): string | number | boolean => configStore.get(key);
