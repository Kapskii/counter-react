import React, { ChangeEvent, useState } from "react"

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
        setStartValue(+e.currentTarget.value)  
    }

    

const onClickHandler = () => {
    props.setCounter(startValue)
    props.setMax(maxValue)
    props.setStart(startValue)
}

    return (
        <div>
            <div>
                <div>max value</div>
                <input value={maxValue} type="number" onChange={onChangeHandlerMax} />
                <div>start value</div>
                <input value={startValue} type="number" onChange={onChangeHandlerStart}/>
            </div>
            <button onClick={onClickHandler}>Set</button>
        </div>
    )
}