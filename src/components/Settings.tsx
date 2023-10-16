import React, { ChangeEvent, useState } from "react"


export let Settings = () => {

    let[max, setMax] = useState("")
    console.log(max)
    
    // let[start, setStart] = useState("")
    // console.log(start)

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => { setMax(e.currentTarget.value) }
    // const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => { setStart(e.currentTarget.value) }

    return (
        <div>
            <div>
                <div>max value</div>
                <input type="number" onChange={onChangeHandlerMax} />
                <div>start value</div>
                {/* <input type="number" onChange={onChangeHandlerStart}/> */}
            </div>
            <button>Set</button>
        </div>
    )
}