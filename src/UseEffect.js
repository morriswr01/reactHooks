import React, { useEffect, useState } from 'react'
import Header from './Header'

import axios from 'axios'


const UseEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getJson() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
            console.log('response', response.data)
            setData(response.data)
        }

        getJson()
    }, [])


    return (
        <div>
            <Header title={"useEffect"} />
            <p>{JSON.stringify(data[0])}</p>
        </div>
    )
}

export default UseEffect
