import dayjs = require('dayjs');
import accountsService from '../accounts-service';
import { accountDoesNotExistError } from '../transactions-service/errors';
import transactionsRepository from '@/repositories/transactions-repository';
import { TransactionEntity } from '@/protocols/transactions';

async function listTransactions(): Promise<TransactionEntity[]> {
  const transactionsList = await transactionsRepository.allTransactions();

  return transactionsList;
}

async function listTransactionsById(bankId: number): Promise<TransactionEntity[]> {
  const checkAccount = await accountsService.validateAccountId(bankId);

  if (checkAccount.length === 0) throw accountDoesNotExistError();

  const transactionList = await transactionsRepository.allTransactionsByBankId(bankId);

  return transactionList;
}

async function monthlyBalance(): Promise<any> {
  const balance = {
    expense: 0,
    income: 0,
  };

  const currentDate = dayjs();

  const transactionsList = await transactionsRepository.allTransactions();

  for (let i = 0; i < transactionsList.length; i++) {
    if (
      dayjs(transactionsList[i].date, 'MM/DD/YYYY').isSame(currentDate, 'month') &&
      dayjs(transactionsList[i].date, 'MM/DD/YYYY').isSame(currentDate, 'year')
    ) {
      if (transactionsList[i].type === 'Despesa') {
        balance.expense += transactionsList[i].value;
      } else {
        balance.income += transactionsList[i].value;
      }
    }
  }

  return balance;
}

async function halfYearBalance(): Promise<any> {
  const halfYearList = [];

  const currentDate = dayjs();

  const transactionsList = await transactionsRepository.allTransactions();

  for (let i = 5; i >= 0; i--) {
    const monthlyDate = currentDate.subtract(i, 'month');

    let balance = 0;

    for (let j = 0; j < transactionsList.length; j++) {
      if (
        dayjs(transactionsList[j].date, 'MM/DD/YYYY').isSame(monthlyDate, 'month') &&
        dayjs(transactionsList[j].date, 'MM/DD/YYYY').isSame(monthlyDate, 'year')
      ) {
        if (transactionsList[j].type === 'Despesa') {
          balance -= transactionsList[j].value;
        } else {
          balance += transactionsList[j].value;
        }
      }
    }

    const result = {
      balance,
      month: monthlyDate.format('MMM'),
    };

    halfYearList.push(result);
  }

  return halfYearList;
}

export default {
  listTransactions,
  monthlyBalance,
  halfYearBalance,
  listTransactionsById,
};
