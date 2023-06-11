import { Router } from 'express';
import { validateBody, validateParams } from '@/middlewares';
import { accountSchema, accountIdSchema, mergeIdSchema } from '@/schemas';
import { getAccounts, postAccount, delAccount, postMergeAccounts } from '@/controllers';

const accountsRouter = Router();

accountsRouter
  .get('/', getAccounts)
  .post('/', validateBody(accountSchema), postAccount)
  .delete('/:id', validateParams(accountIdSchema), delAccount)
  .post('/merge', validateBody(mergeIdSchema), postMergeAccounts);

export { accountsRouter };
