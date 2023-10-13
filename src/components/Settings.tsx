import React, { ChangeEvent, useState } from "react"


export let Settings = () => {

    let[title, setTitle] = useState("")
    console.log(title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.currentTarget.value) }

    return (
        <div>
            <div>
                <div>max value</div>
                <input type="number" onChange={onChangeHandler} />
                <div>start value</div>
                <input type="number" />
            </div>
            <button>Set</button>
        </div>
    )
}