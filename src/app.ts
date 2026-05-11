import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  const version: number = 'not-a-number'; // intentional type error for CI demo

  app.get('/', async () => {
    return {
      message: 'CI/CD Lab Fastify app is running',
      version: process.env.APP_VERSION || version
    };
  });

  app.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return app;
}
