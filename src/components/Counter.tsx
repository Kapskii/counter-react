import { useState } from 'react'



export let Counter = () => {

    let [acc, setAcc] = useState(0)

    

    let onClickHandler = () => {
        setAcc(++acc);
    }

    let onClickMinusHandler = () => {
        setAcc(--acc);
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

