export const healthRoutes = async (fastify, options) => {
  fastify.get('/ping', async (request, reply) => {
    return 'pong\n';
  });
};
