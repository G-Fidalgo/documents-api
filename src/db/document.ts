import { Schema, Model } from 'mongoose';
import { mongo } from '../plugins/database-connector';

const documentSchema = new Schema({
  channel: {
    type: String,
    required: true
  },
  documentName: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['received', 'printed', 'folded', 'sorted', 'delivered'],
    default: 'received'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    enum: ['prior', 'non-prior', 'registered'],
    default: 'non-prior'
  },
  adress: {
    type: String,
    required: true
  }
});

export const Document = mongo.model('document', documentSchema);
