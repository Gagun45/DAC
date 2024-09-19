import React from 'react'

export default function Brick({active, index, stages}) {
    const classTag = `brick ${(index<active)&&'brick-active'} ${stages.includes(index+1)&&'brick-stage'}`
  return (
    <div className={classTag}>
        {stages.includes(index+1)&&`${index+1}`}
    </div>
  )
}
