import { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<'input'> & {
    label: string;
    id: string
}

function Input ({label, id, ...otherProps}: InputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...otherProps} />
        </div>
    )
    
};

export default Input;