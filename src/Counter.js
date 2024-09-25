import { useState, useEffect } from "react";
function Counter(props) {
    
    var init = parseInt(props.init||5);
    var [ count, setCount] = useState(init);
    useEffect(() => {
        var timer=setInterval(() => {
            setCount((count) => { count++; return count});
            //TODO CHECK WHY INCREMENT BY 2
            //setCount((count) => (count+1));
            console.log(count);
            props.increment2();
        }, 1000);
        /*return () => {
            clearInterval(timer);
        }*/
        },[]);
    return (
        <>
        The counter is set to: {count}
        </>
    )
}

export default Counter;