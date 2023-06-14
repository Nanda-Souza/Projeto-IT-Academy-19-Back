import { accountAlreadyExistsError, invalidAccountIdError, accountMergeError } from './errors';
import accountsRepository from '@/repositories/accounts-repository';
import { AccountEntity, Account } from '@/protocols/accounts';

async function listAccounts(): Promise<AccountEntity[]> {
  const accountsList = await accountsRepository.allAccounts();

  return accountsList;
}

async function addAccount(bankAccount: Account): Promise<AccountEntity> {
  const existingAccount = await validateExistingAccount(bankAccount);
  let idController = 0;

  if (existingAccount.length == 1) throw accountAlreadyExistsError();

  const accountsList = await accountsRepository.allAccounts();

  if (accountsList.length > 0) {
    idController = accountsList[accountsList.length - 1].id;
  }

  const newId = idController + 1;

  const accountData: AccountEntity = {
    id: newId,
    ...bankAccount,
  };

  const newAccount = await accountsRepository.insertAccount(accountData);

  return newAccount;
}

async function removeAccount(id: number): Promise<any> {
  const existingId = await validateAccountId(id);

  if (existingId.length == 0) throw invalidAccountIdError();

  const deletedAccount = await accountsRepository.deleteAccount(id);

  return deletedAccount;
}

async function mergeAccounts(accountId: number, mergedId: number) {
  const existingId1 = await validateAccountId(accountId);
  const existingId2 = await validateAccountId(mergedId);

  const accountsList = await accountsRepository.allAccounts();

  if (existingId1.length == 0 || existingId2.length == 0) throw accountMergeError();

  const accountIndex = accountsList.findIndex((account) => {
    return account.id === accountId;
  });

  const mergedIndex = accountsList.findIndex((account) => {
    return account.id === mergedId;
  });

  const mergedAccount = await accountsRepository.updateMergedAccount(accountIndex, mergedIndex);

  const deleteMergeAccount = await accountsRepository.deleteAccount(mergedId);

  return mergedAccount;
}

async function validateExistingAccount(bankAccount: Account) {
  const accountList = await accountsRepository.allAccounts();

  const filteredBank = accountList.filter((account) => account.bank === bankAccount.bank);

  const filteredAgency = filteredBank.filter((account) => account.agency === bankAccount.agency);

  const filteredAccountNum = filteredAgency.filter((account) => account.accountNum === bankAccount.accountNum);

  return filteredAccountNum;
}

async function validateAccountId(id: number) {
  const accountList = await accountsRepository.allAccounts();

  const filteredAccountId = accountList.filter((account) => account.id === id);

  return filteredAccountId;
}

export default {
  listAccounts,
  addAccount,
  removeAccount,
  mergeAccounts,
};
