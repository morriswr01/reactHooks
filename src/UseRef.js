import React, { useRef } from 'react'
import Header from './Header'

const UseRef = () => {

    const inputRef = useRef(null)

    const onClick = () => {
        console.log(inputRef.current.value = "")
    }


    return (
        <div>
            <Header title={"useRef"} />
            <div>
                <h6>Pedro</h6>
                <input type="text" ref={inputRef} ></input>
                <button onClick={onClick}>Increment Counter</button>
            </div>
        </div >
    )
}

export default UseRef