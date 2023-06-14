export type TransactionEntity = {
  id: number;
  bankId: number;
  date: string;
  type: string;
  category: string;
  value: number;
};

export type Transaction = Omit<TransactionEntity, 'id'>;

//export type CreateAccountParams = Omit<TransactionEntity, 'id' | 'balance'>;

//export type DeleteAccountParams = Pick<TransactionEntity, 'id'>;
