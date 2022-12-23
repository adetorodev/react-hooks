import React, { useState } from 'react'

export default function ClassCounter() {
    const [count, setCounter] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCounter(c => c + 1)}>+ Increase</button>
    </div>
  )
}
