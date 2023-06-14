import transactions from '@/database/transactionsData';
import { TransactionEntity } from '@/protocols/transactions';

async function allTransactions(): Promise<TransactionEntity[]> {
  return transactions;
}

const transactionsRepository = {
  allTransactions,
};

export default transactionsRepository;
