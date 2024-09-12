import React from 'react'

export default function Board({boardHeroes, deleteHero}) {
  return (
    <div className='board'>
        {boardHeroes.map((hero, index)=>{
            return (
                <div key={index}
                onClick={()=>deleteHero(hero)}
                className='hero-item-board'
                >{hero.name} ({hero.races.join(' ')})</div>
            )
        })}
    </div>
  )
}
