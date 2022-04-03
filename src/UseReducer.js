import React, { useReducer } from 'react'
import Header from './Header'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "toggleShowText":
            return { count: state.count, showText: action.payload };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [counterState, dispatchCounterState] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <Header title={"useReducer"} />
            <h1>{counterState.count}</h1>
            <button
                onClick={() => {
                    dispatchCounterState({ type: "INCREMENT" });
                    dispatchCounterState({ type: "toggleShowText", payload: false });
                }}
            >
                Click Here
            </button>
            {counterState.showText && <p>This is a text</p>}
        </div>
    )
}

export default UseReducer;
