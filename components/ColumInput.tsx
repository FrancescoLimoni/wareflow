interface ColInputProps {
    type: string, label: string, name: string, placeholder: string, isRequired?: boolean
}

export function ColInput(prop: ColInputProps) {
    return <div className='col space-y-1 w-full'>
        <label>{prop.label}</label>
        <input
            type={prop.type}
            name={prop.name}
            placeholder={prop.placeholder}
            className='border-b border-b-black p-2'
            required={prop.isRequired}
        />
    </div>
}