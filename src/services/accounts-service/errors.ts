import { ApplicationError } from '@/protocols/general';

export function accountAlreadyExistsError(): ApplicationError {
  return {
    name: 'AccountAlreadyExistsError',
    message: 'This bank account already exists!',
  };
}

export function invalidAccountIdError(): ApplicationError {
  return {
    name: 'InvalidAccountIdError',
    message: 'Unable to delete bank account, invalid id!',
  };
}
