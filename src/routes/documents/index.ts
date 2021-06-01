import { IDocument } from 'src/interfaces/document';
import { createDocument, getDocuments } from '../../controllers/document';

export const documentRoutes = async (fastify, options) => {
  fastify.post('/document', async (request, reply) => {
    try {
      const document: IDocument = {
        channel: request.body.channel,
        documentName: request.body.documentName,
        group: request.body.group,
        status: request.body.status,
        type: request.body.type,
        adress: request.body.adress
      };
      const doc = await createDocument(document);
      reply.code(201).send(doc);
    } catch (err) {
      throw Error(err.message);
    }
  });

  fastify.get('/documents', async (request, reply) => {
    let page = 1;
    if (parseInt(request.query.page) > 0) page = parseInt(request.query.page);
    let limit = 10;
    if (parseInt(request.query.limit) > 0) limit = parseInt(request.query.limit);
    let status = null;
    if (typeof request.query.status === 'string') status = request.query.status;
    try {
      const documents = await getDocuments(limit, page, status);
      reply.code(200).send(documents);
    } catch (err) {
      throw Error(err.message);
    }
  });

  // Get single document By ID

  // fastify.get('/document/:id', async (request, reply) => {});

  // Update document

  fastify.put('/document/:id', async (request, reply) => {});

  // Delete document

  fastify.get('/document/:id', async (request, reply) => {});
};
