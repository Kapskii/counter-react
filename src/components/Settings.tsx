import React, { ChangeEvent, useState } from "react"
import { SuperButton } from "./SuperButton"
import { Input } from "./Input"
import s from "./Settings.module.css"
import { isDisabled } from "@testing-library/user-event/dist/utils"
import { errorMonitor } from "stream"

type SettingPropsType = {
    setCounter: (count: number) => void
    counter: number
    setMax: (max: number) => void
    max: number
    setStart: (start: number) => void
}

export const Settings = (props: SettingPropsType) => {
    const [maxValue, setMaxValue] = useState(props.max)
    const [startValue, setStartValue] = useState(props.counter)
    const [error, setError] = useState(false)


    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onClicReskHandler = () => {
        setMaxValue(props.max)
        setStartValue(props.counter)
        setError(false)
    }


    const onClickHandler = () => {
        if (maxValue < startValue || maxValue === startValue) {
            setError(true)
        } else {
            props.setCounter(startValue)
            props.setMax(maxValue)
            props.setStart(startValue)
        }
    }

    const helperText = error ? "Incorrect value" : ''

    return (
        <div className={s.wrapper}>
            <div className={s.inputs}>
                <Input
                    status={error}
                    helperText={helperText}
                    label="max value"
                    value={maxValue}
                    callBack={onChangeHandlerMax} />

                <Input
                    status={error}
                    helperText={helperText}
                    label="start value"
                    value={startValue}
                    callBack={onChangeHandlerStart} />
            </div>
            <div className={s.buttons}>
                <SuperButton status={error} color="primary" variant="contained" name="Set" callBack={onClickHandler} />
                <SuperButton color="secondary" variant="contained" name="Reset" callBack={onClicReskHandler} />
            </div>
        </div>
    )
}