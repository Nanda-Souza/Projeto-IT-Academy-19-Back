import Joi from 'joi';
import { TransactionByBankIdParams } from '@/protocols/transactions';

export const bankAccountIdSchema = Joi.object<TransactionByBankIdParams>({
  bankId: Joi.number().greater(0).integer().required(),
});
