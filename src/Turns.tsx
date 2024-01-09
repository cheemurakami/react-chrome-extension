import React, { useState, FormEvent } from 'react'
import Names from './Names.tsx'
import styled from "styled-components";

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
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputDiv>
            <Input type='text' placeholder='Type name' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          </InputDiv>
          <ButtonDiv>
            <Button type='submit'>Add</Button>

          </ButtonDiv>
        </InputContainer>
      </form>

      {nameList.length > 0 && <Names nameList={nameList} />}
    </>
  )
}

const InputContainer = styled.div`
align-items: center;
display: flex;
justify-content: center;

@media (max-width: 600px) {
    flex-direction: column;
  }
`

const InputDiv = styled.div`
`

const ButtonDiv = styled.div`
`

const Button = styled.button`
  background-color: #91E5F6;
  color: white;
  margin-bottom: 8px;
  margin-top: 8px;
`

const Input = styled.input`
  background-color: white;
  border: 1px solid gray;
  color: black;
  font-size: 16px;
  height: 40px;
  margin-right: 20px;
`

export default Turns