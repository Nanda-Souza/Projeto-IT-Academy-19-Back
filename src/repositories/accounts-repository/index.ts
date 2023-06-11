import accounts from '@/database/data';
import { AccountEntity } from '@/protocols/accounts';

async function allAccounts(): Promise<AccountEntity[]> {
  return accounts;
}

async function insertAccount(bankAccount: AccountEntity): Promise<AccountEntity> {
  accounts.push(bankAccount);
  return bankAccount;
}

async function deleteAccount(id: number) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      accounts.splice(i, 1);
    }
  }
  return id;
}

const accountsRepository = {
  allAccounts,
  insertAccount,
  deleteAccount,
};

export default accountsRepository;