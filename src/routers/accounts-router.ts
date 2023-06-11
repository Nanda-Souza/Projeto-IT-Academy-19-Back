import { Router } from 'express';
import { validateBody, validateParams } from '@/middlewares';
import { accountSchema, accountIdSchema } from '@/schemas';
import { getAccounts, postAccount, delAccount } from '@/controllers';

const accountsRouter = Router();

accountsRouter
  .get('/', getAccounts)
  .post('/', validateBody(accountSchema), postAccount)
  .delete('/:id', validateParams(accountIdSchema), delAccount);

export { accountsRouter };
