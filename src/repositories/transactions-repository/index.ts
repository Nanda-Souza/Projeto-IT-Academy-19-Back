import { TransactionEntity } from '@/protocols/transactions';

let transactions: TransactionEntity[] = [
  {
    id: 1,
    bankId: 1,
    date: '11-30-2022',
    type: 'Receita',
    category: 'Salário',
    description: 'Salário do mês',
    value: 5437.32,
  },
  {
    id: 2,
    bankId: 1,
    date: '12-22-2022',
    type: 'Receita',
    category: 'Salário',
    description: 'Segunda parcela 13°',
    value: 2200,
  },
  {
    id: 3,
    bankId: 1,
    date: '12-30-2022',
    type: 'Receita',
    category: 'Salário',
    description: 'Salário do mês',
    value: 5437.32,
  },
  {
    id: 4,
    bankId: 1,
    date: '1-5-2023',
    type: 'Despesa',
    category: 'Lazer',
    description: 'Academia',
    value: 50,
  },
  {
    id: 5,
    bankId: 1,
    date: '1-6-2023',
    type: 'Despesa',
    category: 'Lazer',
    description: 'Natalversário do João',
    value: 133,
  },
  {
    id: 6,
    bankId: 1,
    date: '1-28-2023',
    type: 'Despesa',
    category: 'Energia)',
    description: 'Contas de Luz',
    value: 472.78,
  },
  {
    id: 7,
    bankId: 1,
    date: '1-30-2023',
    type: 'Receita',
    category: 'Salário',
    description: 'Salário do mês',
    value: 6330,
  },
  {
    id: 8,
    bankId: 1,
    date: '2-5-2023',
    type: 'Despesa',
    category: 'Lazer',
    description: 'Academia',
    value: 50,
  },
  {
    id: 9,
    bankId: 1,
    date: '2-28-2023',
    type: 'Receita',
    category: 'Salário',
    description: 'Salário do mês',
    value: 6330,
  },
  {
    id: 10,
    bankId: 1,
    date: '6-2-2023',
    type: 'Receita',
    category: 'Salário',
    description: 'Salário do mês',
    value: 7550,
  },
  {
    id: 11,
    bankId: 2,
    date: '6-6-2023',
    type: 'Receita',
    category: 'Renda extra',
    description: 'Venda de agendas',
    value: 328.37,
  },
  {
    id: 12,
    bankId: 2,
    date: '6-12-2023',
    type: 'Despesa',
    category: 'Alimentação',
    description: 'Xis do Hiper',
    value: 58.97,
  },
];

async function allTransactions(): Promise<TransactionEntity[]> {
  return transactions;
}

async function allTransactionsByBankId(bankId: number): Promise<TransactionEntity[]> {
  const filteredList = transactions.filter((transactions) => transactions.bankId === bankId);

  return filteredList;
}

async function deleteTransactions(bankId: number) {
  transactions = transactions.filter((transactions) => transactions.bankId !== bankId);

  return bankId;
}

async function mergeTransactions(accountId: number, mergedId: number) {
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].bankId === mergedId) {
      transactions[i].bankId = accountId;
    }
  }

  return accountId;
}

const transactionsRepository = {
  allTransactions,
  deleteTransactions,
  mergeTransactions,
  allTransactionsByBankId,
};

export default transactionsRepository;
