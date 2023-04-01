import { RestorePasswordInputsErrors } from './../interfaces/interfaces'
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  LoginInputErrors,
  FetchBaseQueryError,
  CustomError,
} from './../interfaces/'
/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

export function isCustomError(error: unknown): error is CustomError {
  return typeof error === 'object' && error != null
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  )
}

export function checkMutationError(
  err: unknown
): LoginInputErrors & RestorePasswordInputsErrors {
  console.log('checkerror', err)
  let errMsg = ''

  if (isCustomError(err)) {
    errMsg = err.data.err
  } else if (isFetchBaseQueryError(err)) {
    errMsg = 'error' in err ? err.error : err.data.err
  } else if (isErrorWithMessage(err)) {
    errMsg = err.message
  }

  const inputErrors: LoginInputErrors & RestorePasswordInputsErrors = {}

  if (errMsg) {
    if (errMsg === "There isn't a user with that email") {
      inputErrors.email =
        'El correo electrónico no está asociado a ninguna cuenta.'
    } else if (errMsg === 'Incorrect password') {
      inputErrors.password = 'La contraseña ingresada es incorrecta.'
    } else if (
      errMsg === "The new password can't be the same as the old password"
    ) {
      inputErrors.confirmPassword =
        'La contraseña ingresada no puede ser igual que la actual.'
    }
  }

  return inputErrors
}
