import { ApplicationError } from '@/protocols/general';

export function badRequestError(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'Bad Request Error!',
  };
}
