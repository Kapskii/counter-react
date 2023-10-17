import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";

type ButtonPropsType = ButtonProps & {
    name: string
    callBack: () => void
}

export const SuperButton: FC<ButtonPropsType> = ({ name, color, callBack, variant, ...otherProps }) => {
    return (
        <Button
            onClick={callBack}
            variant = {variant ? variant : 'contained'}
            size={'small'}
            color={color}>
                
            {name}
        </Button>
    )
}