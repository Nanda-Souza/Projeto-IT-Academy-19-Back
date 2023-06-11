import { accountAlreadyExistsError } from './errors';
import accountsRepository from '@/repositories/accounts-repository';
import { AccountEntity, Account } from '@/protocols/accounts';
import accounts from '@/database/data';

async function listAccounts(): Promise<AccountEntity[]> {
  const accounts = await accountsRepository.allAccounts();

  return accounts;
}

async function addAccount(bankAccount: Account): Promise<AccountEntity> {
  const existingAccount = await validateExistingAccount(bankAccount);

  if (existingAccount.length == 1) throw accountAlreadyExistsError();

  const idController = accounts[accounts.length - 1].id;

  const newId = idController + 1;

  const accountData: AccountEntity = {
    id: newId,
    ...bankAccount,
  };

  const newAccount = await accountsRepository.insertAccount(accountData);

  return newAccount;
}

async function removeAccount(id: number): Promise<any> {
  const deletedAccount = await accountsRepository.deleteAccount(id);

  return deletedAccount;
}

async function validateExistingAccount(bankAccount: Account) {
  const accountList = await accountsRepository.allAccounts();

  const filteredBank = accountList.filter((account) => account.bank === bankAccount.bank);

  const filteredAgency = filteredBank.filter((account) => account.agency === bankAccount.agency);

  const filteredAccountNum = filteredAgency.filter((account) => account.accountNum === bankAccount.accountNum);

  return filteredAccountNum;
}

export default {
  listAccounts,
  addAccount,
  removeAccount,
};
