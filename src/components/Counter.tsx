import { FC } from 'react'
import { SuperButton } from './SuperButton'
import s from './Counter.module.css'
import { CounterType } from '../app/App'


type CounterPropsType = {
    counterObj: CounterType
    setCounter: (counter: CounterType) => void
}

export const Counter: FC<CounterPropsType> = ({ counterObj, setCounter }) => {
    const {currentValue, maxValue, startValue} = counterObj


    let onClickPlusHandler = () => {
        if (currentValue < maxValue) {
            setCounter({
                ...counterObj,
                currentValue: currentValue + 1
            })
        }
    }

    let onClickMinusHandler = () => {
        if (currentValue > startValue) {
            setCounter({
                ...counterObj,
                currentValue: currentValue - 1
            })
        }
    }

    let onClickResHandler = () => {
        setCounter({
            ...counterObj,
            currentValue: startValue
        })
    }

    const finalyClass = currentValue === maxValue ? s.titleRed : s.title;

    return (
        <div className={s.count}>
            <h1 className={finalyClass}>{currentValue}</h1>
            <div className={s.button}>
                <SuperButton name='+' callBack={onClickPlusHandler} />
                <SuperButton name='-' callBack={onClickMinusHandler} />
                <SuperButton color="secondary" name='Reset' callBack={onClickResHandler} />
            </div>
        </div>
    )
}

