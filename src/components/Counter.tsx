import { useState } from 'react'



export let Counter = () => {

    let [acc, setAcc] = useState(0)

    const num = 8;

    let onClickHandler = () => {
        if (acc < num) {
            ++acc
        }
        setAcc(acc)
    }

    let onClickMinusHandler = () => {
        acc <= 0 ? setAcc(acc) : setAcc(--acc);
    }

    let onClickResHandler = () => {
        setAcc(0)
    }


    return (
        <div>
            <h1>{acc}</h1>
            <div>
                <button onClick={onClickHandler}>+</button>
                <button onClick={onClickMinusHandler}>-</button>
                <button onClick={onClickResHandler}>Reset</button>
            </div>
        </div>
    )
}

