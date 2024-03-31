import { useState } from "react"

// Learn how to use State
export const Message = () => {

  const [ message, setMessage ] = useState('Welcome visitor!') // Data inside useState() is the default value

  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={() => setMessage('Thank you for subscribing!')}>Subscribe</button>
    </div>
  )
}