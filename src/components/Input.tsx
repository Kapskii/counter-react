import { TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent } from "react";


type InputPropsType = TextFieldProps & {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>)=>void
    label?: string
}

export const Input= (props: InputPropsType) => {
    return(
        <TextField type='number' variant="outlined" label={props.label} value={props.value} onChange={props.callBack}/>
    )
}