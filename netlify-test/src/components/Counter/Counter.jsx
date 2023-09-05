import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  function reset() {
    console.log("Reseting count")
    setCount(0)
  }

  function increment() {
    console.log("Increment count")
    setCount(oldCount => oldCount + 1)
  }

  function decrement() {
    console.log("Decrement count")
    setCount(oldCount => oldCount - 1)
  }

 return (
  <div>
    <p>
      Total Count: {count}
    </p>

    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
 )
}
