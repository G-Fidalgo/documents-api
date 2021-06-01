import mongoose from 'mongoose';

const authURI = `${encodeURIComponent('root')}:${encodeURIComponent('root')}`;
export const mongo = mongoose.createConnection(`mongodb://${authURI}@localhost:27017/documents`, {
  socketTimeoutMS: 0,
  reconnectTries: 2400,
  reconnectInterval: 1500,
  poolSize: 10,
  useNewUrlParser: true,
  authSource: 'admin'
});
