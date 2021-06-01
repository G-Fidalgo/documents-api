import { IDocument } from 'src/interfaces/document';
import { Document } from '../db/document';

export async function createDocument(document: IDocument) {
  try {
    const DocumentToCreate = new Document(document);
    return DocumentToCreate.save();
  } catch (err) {
    throw new Error('An error ocurred while creating the new Document');
  }
}

export async function getDocuments(limit: number, page: number, statusFilter?: string | null) {
  try {
    let options = {};
    if (statusFilter) {
      options = {
        status: statusFilter
      };
    }
    const documents = await Document.find(options)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    if (documents.length > 0) {
      const count = await Document.countDocuments();

      return {
        documents,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      };
    } else {
      throw new Error('No documents found! Check also the page you are requesting');
    }
  } catch (err) {
    console.log(`An error ocurred while searching for documents`);
    throw new Error(err);
  }
}

export const getSingleDocumentById = async (documentId: string) => {
  try {
    const document = await Document.findById(documentId);
    if (document) {
      return document;
    } else {
      throw new Error(`No document found with provided id ${documentId}`);
    }
  } catch (err) {
    console.log(`An error ocurred while searching for specific document`);
    throw new Error(err);
  }
};

// TODO: Work around!
export const updateDocumentById = async (documentId: string, document: any) => {
  try {
    const documentUpdated = await Document.updateOne({ _id: documentId }, document);
    if (document) {
      return document;
    } else {
      throw new Error(`No document found with provided id ${documentId}`);
    }
  } catch (err) {
    console.log(`An error ocurred while updating the document`);
    throw new Error(err);
  }
};

export function deleteDocumentById(documentId: string): void {
  try {
    Document.deleteOne({ _id: documentId });
  } catch (err) {
    console.log(`An error ocurred while deleting the specified document ${documentId}`);
    throw new Error(err);
  }
}
