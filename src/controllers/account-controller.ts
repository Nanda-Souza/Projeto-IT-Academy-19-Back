import httpStatus from 'http-status';
import { Request, Response } from 'express';
import accountsService from '@/services/accounts-service';
import { CreateAccountParams, Account } from '@/protocols/accounts';

export async function getAccounts(req: Request, res: Response) {
  try {
    const accounts = await accountsService.listAccounts();
    return res.status(httpStatus.OK).send(accounts);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function postAccount(req: Request, res: Response) {
  const { bank, agency, accountNum } = req.body as CreateAccountParams;

  const balance = 0;

  const accountData: Account = {
    bank,
    agency,
    accountNum,
    balance,
  };

  try {
    const newAccount = await accountsService.addAccount(accountData);
    return res.status(httpStatus.OK).send();
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
