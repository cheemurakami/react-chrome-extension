import React from 'react'

interface Props {
  nameList: string[]
}

const Names: React.FC<Props> = (props) => {
  const { nameList } = props
  return (
    <>
      {nameList.map((name) => {
        return (
          <>
            <div key={name}>{name}</div>
          </>
        )
      })}
    </>
  )
}

export default Names