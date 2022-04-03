import React, { useRef, useLayoutEffect, useEffect } from 'react'
import Header from './Header'


export default function UseLayoutEffect() {
    const inputRef = useRef(null);

    // CALLED BEFORE ANYTHING IS SHOWN TO THE USER
    // GOOD IF YOU WANT TO DO AN API CALL BEFORE THE PAGE LOADS TO CHECK FOR AN OUTAGE FOR EXAMPLE
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
        inputRef.current.value = "WAGWARN";
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div>
            <Header title={"useLayoutEffect"} />
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
        </div>
    );

}