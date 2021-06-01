export interface IDocument {
  id?: String;
  channel: String;
  documentName: String;
  group: String;
  status: 'received' | 'printed' | 'folded' | 'sorted' | 'delivered';
  createdAt?: Date;
  updatedAt?: Date;
  type: 'prior' | 'non-prior' | 'registered';
  adress: String;
}

export interface DocumentsPaginated {
  documents: IDocument[];
  totalPages: number;
  currentPage: number;
}
