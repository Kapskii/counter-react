import React, { ChangeEvent, useState } from "react"
import { SuperButton} from "./SuperButton"
import { Input } from "./Input"
import s from "./Settings.module.css"

type SettingPropsType = {
    setCounter: (count:number)=>void
    counter: number
    setMax: (max:number)=>void
    max: number
    setStart: (start: number)=>void
}

export const Settings = (props: SettingPropsType) => {
    const [maxValue, setMaxValue] = useState(props.max)
    const [startValue, setStartValue] = useState(props.counter)


    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {  
            setMaxValue(+e.currentTarget.value)
    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => { 
        // if(startValue < maxValue) {
            setStartValue(+e.currentTarget.value)  
        // }   
    }

    

const onClickHandler = () => {
    props.setCounter(startValue)
    props.setMax(maxValue)
    props.setStart(startValue)
}

    return (
        <div className={s.wrapper}>
            <div className={s.inputs}>
                <Input label="max value" value={maxValue} callBack={onChangeHandlerMax}/>
                <Input label="start value" value={startValue} callBack={onChangeHandlerStart}/>
            </div>
            <SuperButton color="secondary" variant="contained" name="Set" callBack={onClickHandler}/>
        </div>
    )
}