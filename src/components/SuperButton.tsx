import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";

type ButtonPropsType = ButtonProps & {
    name: string
    callBack: () => void
    variant?: string
    status?: boolean
}

export const SuperButton: FC<ButtonPropsType> = ({ name, status, color, callBack, variant, ...otherProps }) => {
    return (
        <Button
            onClick={callBack}
            variant = {variant ? variant : 'contained'}
            size={'small'}
            color={color}
            disabled={status}>
                
            {name}
        </Button>
    )
}