export type TransactionEntity = {
  id: number;
  bankId: number;
  date: string;
  type: string;
  category: string;
  value: number;
};

export type Transaction = Omit<TransactionEntity, 'id'>;

export type TransactionByBankIdParams = Pick<TransactionEntity, 'bankId'>;

//export type CreateAccountParams = Omit<TransactionEntity, 'id' | 'balance'>;
