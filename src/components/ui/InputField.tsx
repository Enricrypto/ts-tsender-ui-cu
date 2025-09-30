interface InputFormProps {
  label: string
  placeholder?: string
  value: string
  type?: string
  large?: boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export default function InputForm({
  label,
  placeholder,
  value,
  type,
  large,
  onChange
}: InputFormProps) {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label className='text-sm font-medium text-gray-200'>{label}</label>
      {large ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange || ""}
          className='w-full rounded-lg border border-gray-700 bg-gray-900 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={5}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange || ""}
          className='w-full rounded-lg border border-gray-700 bg-gray-900 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      )}
    </div>
  )
}
