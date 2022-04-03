import React, { useRef } from "react";
import Button from "./Button";
import Header from "./Header";

function UseImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        <div>
            <Header title={"useRef"} />

            <button
                onClick={() => {
                    buttonRef.current.alterToggle();
                }}
            >
                Button From Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    );
}

export default UseImperativeHandle;