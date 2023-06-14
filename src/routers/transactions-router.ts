import { Router } from 'express';
import { getTransactions, getMonthlyBalance, getHalfYearBalance } from '@/controllers';

const transactionsRouter = Router();

transactionsRouter.get('/', getTransactions).get('/monthly', getMonthlyBalance).get('/halfyear', getHalfYearBalance);

export { transactionsRouter };
