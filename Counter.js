import React, { useState } from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(99)

    return (
        <>
            <h1>Count is: {count}</h1>
            <button onClick={() => setCount({count}+1)}>Add to count</button>
            <button onClick={() => setCount({count}-1)}>Subtract the count</button>
        </>
    )
}

export default Counter;