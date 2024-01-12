import React from "react";
import styled from "styled-components";
import { FaStar, FaRegTrashAlt } from "react-icons/fa";

interface Member {
  id: string;
  name: string
}

interface Props {
  nameList: Member[];
  setNameList: (arg: Member[]) => void;
  turn: null | string;
  setTurn: (arg: string) => void;
}

const Names: React.FC<Props> = (props) => {
  const { nameList, setNameList, turn, setTurn } = props;

  const removeName = (id: string) => {
    const newList = nameList.filter((n) => n.id !== id);
    setNameList(newList);

    if (id === turn) setTurn(nameList[0].id)
  };

  const StarIcon: React.FC = () => {
    return (
      <TurnIconDiv>
        <FaStar color='#F5A700' />
      </TurnIconDiv>
    )
  }

  return (
    <TurnContainer>
      {nameList.map((memberInfo) => {
        return (
          <NameDiv key={memberInfo.id}>
            <NameText>{memberInfo.name}</NameText>
            <IconContainer>
              {(turn === memberInfo.id) ? <StarIcon /> : null}
              <TrashIconDiv onClick={() => removeName(memberInfo.id)}>
                <FaRegTrashAlt />
              </TrashIconDiv>
            </IconContainer>
          </NameDiv>
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
  margin: 8px 16px;
`;

const NameText = styled.div``;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 36px;
  justify-content: space-between;
  margin: 8px 16px;
`;

const TrashIconDiv = styled.button`
  background-color: #59a5d8;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  font-size: 0.8em;

  &:hover {
    background-color: #386fa4;
  }
`;

const TurnIconDiv = styled.button`
  background-color: #fff;
  border-radius: 8px;
  font-size: 0.8em;
`;
export default Names;
