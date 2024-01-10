import React from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
interface Props {
  nameList: string[];
  setNameList: (arg: string[]) => void;
}

const Names: React.FC<Props> = (props) => {
  const { nameList, setNameList } = props;

  const removeName = (name: string) => {
    const newList = nameList.filter((n) => n !== name);
    setNameList(newList);
  };

  return (
    <TurnContainer>
      {nameList.map((name) => {
        return (
          <>
            <NameDiv key={name}>
              <NameText>{name}</NameText>
              <IconDiv onClick={() => removeName(name)}>
                <FaRegTrashAlt />
              </IconDiv>
            </NameDiv>
          </>
        );
      })}
    </TurnContainer>
  );
};

const TurnContainer = styled.div``;

const NameDiv = styled.div`
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: space-between;
  margin: 4px 16px;
`;

const NameText = styled.div``;

const IconDiv = styled.button`
  background-color: #59a5d8;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8em;

  &:hover {
    background-color: #386fa4;
  }
`;
export default Names;
