import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';
import transactionsService from '@/services/transactions-service';
import { TransactionByBankIdParams } from '@/protocols/transactions';

export async function getTransactions(req: Request, res: Response) {
  try {
    const transactions = await transactionsService.listTransactions();
    return res.status(httpStatus.OK).send(transactions);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getMonthlyBalance(req: Request, res: Response) {
  try {
    const monthlyBalance = await transactionsService.monthlyBalance();
    return res.status(httpStatus.OK).send(monthlyBalance);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getHalfYearBalance(req: Request, res: Response) {
  try {
    const halfYearBalance = await transactionsService.halfYearBalance();
    return res.status(httpStatus.OK).send(halfYearBalance);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function postTransactionList(req: Request, res: Response, next: NextFunction) {
  const { bankId } = req.body as TransactionByBankIdParams;

  try {
    const transactionList = await transactionsService.listTransactionsById(bankId);
    return res.status(httpStatus.OK).send(transactionList);
  } catch (e) {
    next(e);
  }
}
