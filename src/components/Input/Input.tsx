import React from 'react'
import { Label } from '../Label'
import { handleEnterPress, handleStringChange } from './Input.helpers'

type Props = {
  onChange: (text: string) => void
  placeholder?: string
  value?: string
  label?: string
  type?: string
  disabled?: boolean
}

const Input: React.FunctionComponent<Props> = ({
  onChange,
  placeholder,
  value = '',
  label,
  type = 'text',
  disabled
}: Props) => {
  const [localVal, setLocalVal] = React.useState<string>('')

  React.useEffect(() => {
    setLocalVal(value)
  }, [value])

  const onChangeValue = () => {
    if (localVal === value) return

    onChange(localVal)
  }

  return (
    <div className="w-full">
      <Label>{label}</Label>
      <input
        type={type}
        value={localVal}
        onChange={handleStringChange(setLocalVal)}
        onKeyPress={handleEnterPress(onChangeValue)}
        onBlur={onChangeValue}
        placeholder={placeholder}
        className='mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-blue-500 focus:border-blue-500'
        disabled={disabled}
      />
    </div>
  )
}

export default Input
