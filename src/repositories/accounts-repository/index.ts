import accounts from '@/database/data';
import { AccountEntity } from '@/protocols/accounts';

async function allAccounts(): Promise<AccountEntity[]> {
  return accounts;
}

async function insertAccount(bankAccount: AccountEntity): Promise<AccountEntity> {
  accounts.push(bankAccount);
  return bankAccount;
}

const accountsRepositort = {
  allAccounts,
  insertAccount,
};

export default accountsRepositort;
