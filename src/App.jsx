import React, { useState } from 'react'

const ShowCount = ({ value =0 }) => {
  return <p>You have clicked {value} times.</p>
}

const App = () => {
  let [count, setCount] = useState(0)
  console.log(count)

  return <>
    <h1>State</h1>
    <ShowCount value={count} />
    <button onClick={() => console.log(setCount(count+1))}>Click Me!</button>
  </>
}

export default App