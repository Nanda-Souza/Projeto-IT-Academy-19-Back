import { Router } from 'express';
import { getTransactions, getMonthlyBalance, getHalfYearBalance, postTransactionList } from '@/controllers';
import { validateBody } from '@/middlewares';
import { bankAccountIdSchema } from '@/schemas';

const transactionsRouter = Router();

transactionsRouter
  .get('/', getTransactions)
  .get('/monthly', getMonthlyBalance)
  .get('/halfyear', getHalfYearBalance)
  .post('/bybank', validateBody(bankAccountIdSchema), postTransactionList);

export { transactionsRouter };
