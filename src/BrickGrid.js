import React from 'react'
import Brick from './Brick'

export default function BrickGrid({stages, active}) {

    const newArray = l => [...Array(l)]
    const maxStage = stages.slice(-1)[0]


  return (
    <div className='brick-grid'>
        {newArray(maxStage).map((item, index)=>{
            return <Brick key={index} active={active} index={index} stages={stages} />
        })}
    </div>
  )
}
