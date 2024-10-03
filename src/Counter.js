import React, { useState, useEffect } from 'react';
function Counter({ init, end }) {
    var init = parseInt(init || 0);
    var end = parseInt(end || 0);
    const [count, setCount] = useState(init);
    function incr() {
        setCount(count + 1);
    }
    return (
        <>
            Initial value of the counter is: {init}
            <br />
            End of the counter at: {end}
            <br />
            The counter is set to: {count}
            <br />
            {
                (count < end) ?
                    <>
                        <i>Counter in progress</i>&nbsp;
                        <button onClick={incr}>count+1</button>
                    </> :
                    <b>Counter stopped</b>
            }
        </>
    )
}
export default Counter;