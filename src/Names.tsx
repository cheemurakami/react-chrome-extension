import React from 'react'
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
interface Props {
  nameList: string[]
}

const Names: React.FC<Props> = (props) => {
  const { nameList } = props
  return (
    <TurnContainer>
      {nameList.map((name) => {
        return (
          <>
            <NameDiv key={name}>
              <NameText>{name}</NameText>
              <IconDiv>

                <FaRegTrashAlt />
              </IconDiv>
            </NameDiv>
          </>
        )
      })}
    </TurnContainer>
  )
}

const TurnContainer = styled.div`
`

const NameDiv = styled.div`
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: space-between;
  margin: 4px 16px;
`

const NameText = styled.div`
`

const IconDiv = styled.button`
  background-color: #59A5D8;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8em;

  &:hover{
    background-color: #386FA4;
  }
`
export default Names