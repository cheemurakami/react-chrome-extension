import React, { useState, FormEvent } from 'react'
import Names from './Names.tsx'
import styled from "styled-components";

const Turns: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [nameList, setNameList] = useState<string[]>([])
  const [buttonText, setButtonText] = useState<string>('Start')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue !== "") {
      setNameList([...nameList, inputValue])
      setInputValue('')
    }
  }

  return (
    <>
      <h2>Turns</h2>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputDiv>
            <Input
              type='text'
              placeholder='Type name'
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </InputDiv>
          <ButtonDiv>
            <AddButton type='submit'>Add</AddButton>
          </ButtonDiv>
        </InputContainer>
      </form>

      <ButtonDiv>
        <StartNextButton onClick={() => setButtonText("Next")}>{buttonText}</StartNextButton>
      </ButtonDiv>

      {nameList.length > 0 &&
        <Names nameList={nameList} setNameList={setNameList} />}
    </>
  )
}

const InputContainer = styled.div`
align-items: center;
display: flex;
justify-content: center;

@media (max-width: 300px) {
    flex-direction: column;
  }
`

const InputDiv = styled.div`
`

const ButtonDiv = styled.div`
`

const AddButton = styled.button`
  background-color: #91E5F6;
  color: white;
  margin-bottom: 8px;
  margin-top: 8px;
  
  &:hover{
    background-color: #84D2F6;
  }
`

const Input = styled.input`
  background-color: white;
  border: 1px solid gray;
  color: black;
  font-size: 16px;
  height: 40px;
  margin-right: 20px;
  `

const StartNextButton = styled.button`
  background-color: #99D19C;
  color: white;
  margin-bottom: 8px;
  margin-top: 8px;
  
  &:hover{
    background-color: #73AB84;
  }
`
export default Turns