import { TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent, useState } from "react";


type InputPropsType = TextFieldProps & {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    label?: string
    status: boolean
}

export const Input = (props: InputPropsType) => {
    const {label, value, callBack, status, ...restProps} = props

    return (
        <TextField type='number'
            variant="outlined"
            label={label}
            value={value}
            onChange={callBack} 
            error={status}
            {...restProps}
            />
    )
}