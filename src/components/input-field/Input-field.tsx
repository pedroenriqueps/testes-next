"use client"

import { UseFormRegister } from "react-hook-form";

interface InputData {
    name: string;
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: keyof InputData;
    register: UseFormRegister<InputData>;
}

export function InputField({ label, name, register, ...rest }: InputFieldProps) {
    return (
        <div>
            <label>{label}</label>
            <input {...register(name)} {...rest} />
        </div>
    );
}
