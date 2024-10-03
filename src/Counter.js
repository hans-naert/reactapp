import React, { useState, useEffect } from 'react';
function Counter({ init, end }) {
    var init = parseInt(init || 0);
    var end = parseInt(end || 0);
    const [count, setCount] = useState(init);
    useEffect(function () {
        if (end && count >= end) return;
        var timer = setInterval(function () {
            setCount((count) => (count + 1));
            console.log("count =", count);
        }, 1000);
        return function () {
            clearInterval(timer);
        }
    });
    return (
        <>
            Initial value of the counter is: {init}
            <br />
            End of the counter at: {end}
            The counter is set to: {count}
            <br />
            {
                (end && count >= end) ? <b>Counter stopped</b> : <i>Counter in progress</i>
            }
        </>
    )
}
export default Counter;