import React, { useState, useEffect } from 'react'

function HookCountOne() {

    const [count, setCount ] = useState(0)

    useEffect( () => {
        document.title = `You click ${count}`
    })


  return (
    <div>
        <button onClick={() => setCount(count+1)} >Click { count } times</button>
    </div>
  )
}

export default HookCountOne