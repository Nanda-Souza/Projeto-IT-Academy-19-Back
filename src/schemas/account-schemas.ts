import Joi from 'joi';
import { CreateAccountParams, DeleteAccountParams, MergeAccountsParams } from '@/protocols/accounts';

export const accountSchema = Joi.object<CreateAccountParams>({
  bank: Joi.string().min(2).required(),
  agency: Joi.string().length(4).required(),
  accountNum: Joi.string().min(6).max(11).required(),
});

export const accountIdSchema = Joi.object<DeleteAccountParams>({
  id: Joi.number().greater(0).integer().required(),
});

export const mergeIdSchema = Joi.object<MergeAccountsParams>({
  accountId: Joi.number().greater(0).integer().required(),
  mergedId: Joi.number().greater(0).integer().required(),
});
