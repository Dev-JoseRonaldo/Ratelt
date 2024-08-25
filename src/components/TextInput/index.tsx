import { InputHTMLAttributes } from "react"

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
  title: string
}

export const TextInput = ({ title, ...props }: TextInputProps) => {
  return (
    <div className="relative">   
      <input
        type="text"
        className='peer bg-transparent w-full border-b-2 border-primary text-midnight/75 placeholder-transparent 
          focus:outline-none focus:border-primary'
        placeholder=" "
        {...props}
      />

      <label
        className="absolute left-0 -top-10 text-primary transition-all peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-midnight/35 peer-focus:text-md peer-focus:text-primary peer-focus:-top-10"
      >
        {title}
      </label>
    </div>
  )
}