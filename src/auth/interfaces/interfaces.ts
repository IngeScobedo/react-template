interface DataError {
  err: string
}

export type FetchBaseQueryError =
  | {
      /**
       * * `number`:
       *   HTTP status code
       */
      status: number
      data: DataError
    }
  | {
      /**
       * * `"FETCH_ERROR"`:
       *   An error that occurred during execution of `fetch` or the `fetchFn` callback option
       **/
      status: 'FETCH_ERROR'
      data?: undefined
      error: string
    }
  | {
      /**
       * * `"PARSING_ERROR"`:
       *   An error happened during parsing.
       *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",
       *   or an error occurred while executing a custom `responseHandler`.
       **/
      status: 'PARSING_ERROR'
      originalStatus: number
      data: string
      error: string
    }
  | {
      /**
       * * `"CUSTOM_ERROR"`:
       *   A custom error type that you can return from your `queryFn` where another error might not make sense.
       **/
      status: 'CUSTOM_ERROR'
      data?: unknown
      error: string
    }

export interface SerializedError {
  name?: string
  message?: string
  stack?: string
  code?: string
  data?: unknown
}

export interface CustomErrorData {
  err: string
}

export interface CustomError {
  data: CustomErrorData
  status: number
}

export type LoginInputs = {
  email: string
  password: string
}

export type LoginInputErrors = {
  email?: string
  password?: string
}

export type RecoverPasswordInputs = {
  email: string
}

export type RecoverPasswordInputsErrors = {
  email?: string
}

export type RestorePasswordInputs = {
  password: string
  confirmPassword: string
}

export interface RestorePasswordInputsErrors {
  password?: string
  confirmPassword?: string
}
