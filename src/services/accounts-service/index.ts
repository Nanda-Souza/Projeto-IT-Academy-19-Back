import accountsRepositort from '@/repositories/accounts-repository';
import { AccountEntity, Account } from '@/protocols/accounts';
import accounts from '@/database/data';

async function listAccounts(): Promise<AccountEntity[]> {
  const accounts = await accountsRepositort.allAccounts();

  return accounts;
}

async function addAccount(bankAccount: Account): Promise<AccountEntity> {
  const idController = accounts[accounts.length - 1].id;

  const newId = idController + 1;

  const accountData: AccountEntity = {
    id: newId,
    ...bankAccount,
  };

  const newAccount = await accountsRepositort.insertAccount(accountData);

  return newAccount;
}

export default {
  listAccounts,
  addAccount,
};
