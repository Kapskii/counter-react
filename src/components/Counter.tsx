import { FC, useState } from 'react'


type CounterPropsType = {
    max: number
    counter: number
    setCounter: (count: number)=>void
    start: number
}

export const Counter:FC<CounterPropsType> = ({max, counter, setCounter,...otheProps}) => {
    

    let onClickHandler = () => {
        if (counter < max) {
            setCounter(counter+1) 
        }
    }

    let onClickMinusHandler = () => {
        if (counter > 0) {
            setCounter(counter - 1) 
        }
    }

    let onClickResHandler = () => {
        setCounter(otheProps.start)
    }


    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={onClickHandler}>+</button>
                <button onClick={onClickMinusHandler}>-</button>
                <button onClick={onClickResHandler}>Reset</button>
            </div>
        </div>
    )
}

