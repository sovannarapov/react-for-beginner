// Learn how to use form
import { useState } from 'react'

export const Form = () => {

  const [ username, setUsername ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ country, setCountry ] = useState('Austrialia')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Form data: \n Username = ${username} \n Description = ${description} \n Country = ${country}`)
    setUsername('')
    setDescription('')
    setCountry('')
  }

  return (
    <div>
      <h1>React Form</h1>
      <p>Enter username</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br /><br />
        <textarea placeholder="Description..." value={description} onChange={(event) => setDescription(event.target.value)} />
        <p>Select your country</p>
        <select value={country} onChange={(event) => setCountry(event.target.value)}>
          <option value="Australia">Austrialia</option>
          <option value="Brazil">Brazil</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Denmark">Denmark</option>
          <option value="Egypt">Egypt</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Hongkong">Hongkong</option>
        </select>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}