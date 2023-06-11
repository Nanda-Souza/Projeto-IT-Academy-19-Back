export type AccountEntity = {
  id: number;
  bank: string;
  agency: string;
  accountNum: string;
  balance: number;
};

export type Account = Omit<AccountEntity, 'id'>;

export type CreateAccountParams = Omit<AccountEntity, 'id' | 'balance'>;
