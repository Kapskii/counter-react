import { FC, useState } from 'react'
import { SuperButton } from './SuperButton'
import s from './Counter.module.css'


type CounterPropsType = {
    max: number
    counter: number
    setCounter: (count: number) => void
    start: number
}

export const Counter: FC<CounterPropsType> = ({ max, counter, setCounter, ...otheProps }) => {


    let onClickPlusHandler = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    let onClickMinusHandler = () => {
        if (counter > otheProps.start) {
            setCounter(counter - 1)
        }
    }

    let onClickResHandler = () => {
        setCounter(otheProps.start)
    }


    return (
        <div className={s.count}>
            <h1 className={s.title}>{counter}</h1>
            <div className={s.button}>
                <SuperButton name='+' callBack={onClickPlusHandler} />
                <SuperButton name='-' callBack={onClickMinusHandler} />
                <SuperButton name='Reset' callBack={onClickResHandler} />
            </div>
        </div>
    )
}

