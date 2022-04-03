import React, { useState } from 'react'
import Header from './Header'

const State = () => {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("John")

    const incrementCounter = () => { setCounter(counter + 1) }
    const changeName = (e) => { setName(e.target.value) }
    return (
        <div>
            <Header title={"useState"} />
            <div id="incrementCounter">
                {counter}
                <button onClick={incrementCounter}>Increment Counter</button>
            </div>
            <div id="inputName">
                {name}
                <input type="text" onChange={changeName}></input>
            </div>
        </div >
    )
}

export default State