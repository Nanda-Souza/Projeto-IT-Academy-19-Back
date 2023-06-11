import { Router } from 'express';

import { getAccounts, postAccount } from '@/controllers';

const accountsRouter = Router();

accountsRouter.get('/', getAccounts).post('/', postAccount);

export { accountsRouter };
