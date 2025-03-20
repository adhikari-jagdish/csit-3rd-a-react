import { useState } from "react";

const ChildA = ({ count, onIncreament }) => {

    return (
        <>
            <h1>Child A</h1>
            <p>Count: {count} </p>
            <button onClick={onIncreament}>Increment</button>
        </>
    )
}

const ChildB = ({ count }) => {
    return (
        <>
            <h1>Child B</h1>
            <p>Count: {count} </p>
        </>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Counter</h1>
            <ChildA count={count} onIncreament={() => setCount(count + 1)} />
            <ChildB count={count} />
        </>
    )
}

export default Counter