function CommonInput({label,onChange,name,type,id,value,palceholder})
{
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            type={type || 'text'}
            name={name}
            id={id}
            palceholder={palceholder || 'Enter value here'}
            value={value}
            onChange={onChange}
             />
        </div>
    )
}

export default CommonInput;


// CommonInput will be used inside CommonForm, and CommonForm will be used on login and register pages`