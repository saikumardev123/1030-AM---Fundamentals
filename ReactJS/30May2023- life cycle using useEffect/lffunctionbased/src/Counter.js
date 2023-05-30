import { useState, useEffect } from 'react';
function Counter() {
    console.log("Counter component loaded");
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (counter == 0) {
            console.log("component did mount");
        }
        else {
            console.log("component did update called");
        }
        // differentiate between componentdidmount and componentdidupdate
    }, [counter])
    const updateState = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h1 onClick={updateState}>Counter {counter}</h1>
        </div>
    )
}
export default Counter;


/*
side effect:


*/