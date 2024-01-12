import React, { useState, useEffect, FormEvent } from "react";
import Names from "./Names.tsx";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";

interface Member {
  id: string;
  name: string;
}

const Turns: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [nameList, setNameList] = useState<Member[]>([]);
  const [buttonText, setButtonText] = useState<string>("Start");
  const [turn, setTurn] = useState<null | string>(null);
  const [turnIndex, setTurnIndex] = useState<number>(0);

  useEffect(() => {
    if (nameList[turnIndex] && turn) {
      setTurn(nameList[turnIndex].id)
    } else if (nameList.length === 0){
      setTurn(null)
    }
  }, [turnIndex, turn, nameList])


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputValue !== "") {
      const id = uuid4();
      const memberInfo = { id: id, name: inputValue };
      setNameList([...nameList, memberInfo]);
      setInputValue("");
    }
  };

  const startTurns = () => {
    setButtonText("Next");
    setTurn(nameList[turnIndex].id)
  };

  const changeTurn = () => {
    if (turnIndex < nameList.length - 1) {
      setTurnIndex(turnIndex + 1);
    } else if (turnIndex === nameList.length - 1 || nameList[turnIndex] === undefined) {
      setTurnIndex(0);
    }
  };

  return (
    <>
      <h2>Turns</h2>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputDiv>
            <Input
              type="text"
              placeholder="Type name"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </InputDiv>
          <ButtonDiv>
            <AddButton type="submit">Add</AddButton>
          </ButtonDiv>
        </InputContainer>
      </form>

      <ButtonDiv>
        <StartNextButton onClick={turn ? changeTurn : startTurns}>
          {buttonText}
        </StartNextButton>
      </ButtonDiv>

      {nameList.length > 0 && (
        <Names
          nameList={nameList}
          setNameList={setNameList}
          turn={turn}
          setTurn={setTurn}
        />
      )}
    </>
  );
};

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 300px) {
    flex-direction: column;
  }
`;

const InputDiv = styled.div``;

const ButtonDiv = styled.div``;

const AddButton = styled.button`
  background-color: #91e5f6;
  color: black;
  margin-bottom: 8px;
  margin-top: 8px;

  &:hover {
    background-color: #84d2f6;
  }
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid gray;
  color: black;
  font-size: 16px;
  height: 40px;
  margin-right: 20px;
`;

const StartNextButton = styled.button`
  background-color: #99d19c;
  color: black;
  margin-bottom: 8px;
  margin-top: 8px;

  &:hover {
    background-color: #73ab84;
  }
`;
export default Turns;
