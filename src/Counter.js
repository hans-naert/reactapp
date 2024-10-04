import { useReducer } from "react";
function Counter() {
    const [state, dispatch] = useReducer(function (state, action) {
        var newState={...state}; //do not modify the original state
        if (action == "INCR") newState.value += 1;
        if (action == "DECR") newState.value -= 1;
        return newState;
    }, { value: 0 });
    function incrValue() {
        dispatch("INCR");
    }
    function decrValue() {
        dispatch("DECR");
    }
    return (
        <>
            <button onClick={incrValue}>value + 1</button>
            &nbsp;&nbsp;
            <button onClick={decrValue}>value - 1</button>
            &nbsp;
            =&gt;
            value = {state.value};
        </>
    )
}
export default Counter;