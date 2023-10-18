import React, { ChangeEvent, useEffect, useState } from "react"
import { SuperButton } from "./SuperButton"
import { Input } from "./Input"
import s from "./Settings.module.css"
import { CounterType } from '../app/App'


type SettingPropsType = {
    counter: number
    max: number
    setCounter: (counter: CounterType) => void
}

export const Settings = (props: SettingPropsType) => {
    const [maxValue, setMaxValue] = useState(props.max)
    const [startValue, setStartValue] = useState(props.counter)
    const [error, setError] = useState(false)

    useEffect(() => {
        setMaxValue(props.max)
        setStartValue(props.counter)
    }, [props.max, props.counter])


    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onClicResetHandler = () => {
        setMaxValue(props.max)
        setStartValue(props.counter)
        setError(false)
    }


    const onClickHandler = () => {
        if (maxValue < startValue || maxValue === startValue || startValue < 0) {
            setError(true)
        } else {
            props.setCounter({
                currentValue: startValue,
                maxValue: maxValue,
                startValue: startValue,
            })
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
                <SuperButton color="secondary" variant="contained" name="Reset" callBack={onClicResetHandler} />
            </div>
        </div>
    )
}