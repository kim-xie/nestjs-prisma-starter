import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: process.env.PORT,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Nestjs prisma',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '30m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
