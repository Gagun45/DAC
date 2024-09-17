import React from 'react'
import Brick from './Brick'

export default function BrickGrid({stages, active}) {

    const newArray = l => [...Array(l)]
    const maxStage = stages.slice(-1)[0]


  return (
    <div className='w-0 flex flex-col-reverse border-[1px] border-black opacity-[0.4] transition-[100ms] ease-in-out has-[.brick]:w-full
    has-[.brick-stage.brick-active]:opacity-100'>
        {newArray(maxStage).map((item, index)=>{
            return <Brick key={index} active={active} index={index} stages={stages} />
        })}
    </div>
  )
}
