import fastify from 'fastify';

import { documentRoutes } from './routes/documents';
import { healthRoutes } from './routes/status';

const server = fastify({
  logger: true
});

//@Routes
server.register(healthRoutes);
server.register(documentRoutes);

//@Server
server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

//@Interfaces
interface IQuerystring {
  username: string;
  password: string;
}

interface IHeaders {
  'h-Custom': string;
}
