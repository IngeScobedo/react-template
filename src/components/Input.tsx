/* eslint-disable react/display-name */
import { forwardRef } from 'react'

export interface Props extends React.ComponentProps<'input'> {
  label: string
  errorMessage?: string
  className?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, label, errorMessage, className, ...props }: Props, ref) => {
    return (
      <div className="flex flex-col gap-[2px]">
        <label className="text-md text-slate-500 ml-2" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref && ref}
          id={id}
          type="text"
          className={`lg:w-[347px] h-[38px] rounded-md border-inputBorder py-2 px-4 border border-transparent outline-none placeholder:text-placeholderInput text-slate-700 bg-gray ${
            className ? className : ''
          } ${errorMessage ? 'border-red-600 placeholder:text-red-600' : ''}`}
          {...props}
        />
        <div
          className={`invalid-feedback pl-2 text-sm h-5  ${
            errorMessage ? 'text-red-600' : ''
          }`}
        >
          {errorMessage}
        </div>
      </div>
    )
  }
)

export default Input
