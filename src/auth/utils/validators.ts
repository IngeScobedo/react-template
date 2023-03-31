type InputsValidatorsType = {
  email: RegExp
  password: RegExp
}

export const inputsValidators: InputsValidatorsType = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
}
