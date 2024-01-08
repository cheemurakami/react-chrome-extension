import React, { useState, FormEvent } from 'react'
import Names from './Names.tsx'

const Turns: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [nameList, setNameList] = useState<string[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setNameList([...nameList, inputValue])
    setInputValue('')
  }

  return (
    <>
      <h2>Turns</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Type name' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          <button type='submit'>Add</button>
        </form>

      </div>
      {nameList.length > 0 && <Names nameList={nameList} />}
    </>
  )
}

export default Turns