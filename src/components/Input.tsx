import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

const Input = ({ id, label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <label className="text-md text-gray-400 ml-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="w-[347px] h-[38px] rounded-md border-inputBorder py-2 px-4 placeholder:text-placeholderInput"
        {...props}
      />
    </div>
  )
}

export default Input
