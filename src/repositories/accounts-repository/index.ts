import transactionsRepository from '../transactions-repository';
import { AccountEntity } from '@/protocols/accounts';

let accounts: AccountEntity[] = [
  {
    id: 1,
    bank: 'Bradesco',
    agency: '7210',
    accountNum: '00094080',
    balance: 32578.86,
  },
  {
    id: 2,
    bank: 'NuBank',
    agency: '0001',
    accountNum: '12345678',
    balance: 269.4,
  },
];

async function allAccounts(): Promise<AccountEntity[]> {
  return accounts;
}

async function insertAccount(bankAccount: AccountEntity): Promise<AccountEntity> {
  accounts.push(bankAccount);
  return bankAccount;
}

async function deleteAccount(id: number) {
  await transactionsRepository.deleteTransactions(id);

  accounts = accounts.filter((account) => account.id !== id);

  return id;
}

async function updateMergedAccount(accountIndex: number, mergedIndex: number) {
  accounts[accountIndex].balance += accounts[mergedIndex].balance;

  await transactionsRepository.mergeTransactions(accounts[accountIndex].id, accounts[mergedIndex].id);

  return accountIndex;
}

const accountsRepository = {
  allAccounts,
  insertAccount,
  deleteAccount,
  updateMergedAccount,
};

export default accountsRepository;
