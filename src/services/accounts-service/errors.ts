import { ApplicationError } from '@/protocols/general';

export function accountAlreadyExistsError(): ApplicationError {
  return {
    name: 'AccountAlreadyExistsError',
    message: 'The bank account already exists!',
  };
}
