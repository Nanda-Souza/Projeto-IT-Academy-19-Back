import { ApplicationError } from '@/protocols/general';

export function accountDoesNotExistError(): ApplicationError {
  return {
    name: 'AccountDoesNotExistsError',
    message: 'This bank account does not exist exists!',
  };
}
